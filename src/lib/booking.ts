import "server-only";
import { z } from "zod";

const CALENDAR_TIME_ZONE = "America/Los_Angeles";
const CALENDAR_ID = "primary";
const SLOT_MINUTES = 30;
const gatewayBase = "https://connector-gateway.lovable.dev/google_calendar/calendar/v3";

const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
export const availabilitySchema = z.object({ date: dateSchema });
export const bookingSchema = z.object({
  start: z.string().datetime(),
  firstName: z.string().trim().min(1).max(60),
  lastName: z.string().trim().min(1).max(60),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(120).optional(),
});

type BusyPeriod = { start?: string; end?: string };
type FreeBusyResponse = { calendars?: Record<string, { busy?: BusyPeriod[] }> };
type EventResponse = { htmlLink?: string; hangoutLink?: string };

function connectorHeaders() {
  const lovableApiKey = process.env["LOVABLE_API_KEY"];
  const calendarApiKey = process.env["GOOGLE_CALENDAR_API_KEY"];
  if (!lovableApiKey || !calendarApiKey) throw new Error("Calendar connection is not configured.");
  return {
    Authorization: `Bearer ${lovableApiKey}`,
    "X-Connection-Api-Key": calendarApiKey,
    "Content-Type": "application/json",
  };
}

async function calendarRequest<T>(path: string, init: RequestInit): Promise<T> {
  const response = await fetch(`${gatewayBase}${path}`, { ...init, headers: { ...connectorHeaders(), ...init.headers } });
  if (!response.ok) {
    const body = await response.text();
    console.error(`Google Calendar request failed [${response.status}]: ${body}`);
    throw new Error(`Calendar request failed [${response.status}]: ${body}`);
  }
  return response.json() as Promise<T>;
}

function zoneParts(date: Date) {
  const values = new Intl.DateTimeFormat("en-US", {
    timeZone: CALENDAR_TIME_ZONE,
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23",
  }).formatToParts(date);
  return Object.fromEntries(values.filter((part) => part.type !== "literal").map((part) => [part.type, Number(part.value)]));
}

function pacificLocalToUtc(date: string, hour: number, minute: number) {
  const [year, month, day] = date.split("-").map(Number);
  if (!year || !month || !day) throw new Error("Invalid date.");
  const desired = Date.UTC(year, month - 1, day, hour, minute, 0);
  let guess = desired;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const parts = zoneParts(new Date(guess));
    const represented = Date.UTC(parts["year"] ?? year, (parts["month"] ?? month) - 1, parts["day"] ?? day, parts["hour"] ?? hour, parts["minute"] ?? minute, parts["second"] ?? 0);
    guess += desired - represented;
  }
  return new Date(guess);
}

function pacificDate(date = new Date()) {
  const parts = zoneParts(date);
  return `${parts["year"]}-${String(parts["month"]).padStart(2, "0")}-${String(parts["day"]).padStart(2, "0")}`;
}

function isValidBusinessDate(date: string) {
  const midday = pacificLocalToUtc(date, 12, 0);
  const weekday = new Intl.DateTimeFormat("en-US", { timeZone: CALENDAR_TIME_ZONE, weekday: "short" }).format(midday);
  return date >= pacificDate() && weekday !== "Sat" && weekday !== "Sun";
}

async function fetchAvailableSlots(date: string) {
  if (!isValidBusinessDate(date)) return [];
  const dayStart = pacificLocalToUtc(date, 9, 0);
  const dayEnd = pacificLocalToUtc(date, 17, 0);
  const result = await calendarRequest<FreeBusyResponse>("/freeBusy", {
    method: "POST",
    body: JSON.stringify({ timeMin: dayStart.toISOString(), timeMax: dayEnd.toISOString(), timeZone: CALENDAR_TIME_ZONE, items: [{ id: CALENDAR_ID }] }),
  });
  const busy = result.calendars?.[CALENDAR_ID]?.busy ?? [];
  const now = Date.now();
  const slots: string[] = [];
  for (let start = dayStart.getTime(); start + SLOT_MINUTES * 60_000 <= dayEnd.getTime(); start += SLOT_MINUTES * 60_000) {
    const end = start + SLOT_MINUTES * 60_000;
    const overlaps = busy.some((period) => {
      const busyStart = period.start ? new Date(period.start).getTime() : Number.POSITIVE_INFINITY;
      const busyEnd = period.end ? new Date(period.end).getTime() : Number.NEGATIVE_INFINITY;
      return start < busyEnd && end > busyStart;
    });
    if (start > now && !overlaps) slots.push(new Date(start).toISOString());
  }
  return slots;
}

export async function getAvailableSlots(date: string) {
  return { slots: await fetchAvailableSlots(date), timeZone: CALENDAR_TIME_ZONE, durationMinutes: SLOT_MINUTES };
}

export async function scheduleDiscoveryCall(data: z.infer<typeof bookingSchema>) {
    const start = new Date(data.start);
    const date = pacificDate(start);
    const available = await fetchAvailableSlots(date);
    if (!available.includes(start.toISOString())) throw new Error("That time is no longer available. Please choose another slot.");
    const end = new Date(start.getTime() + SLOT_MINUTES * 60_000);
    const fullName = `${data.firstName} ${data.lastName}`.trim();
    const event = await calendarRequest<EventResponse>(`/calendars/${encodeURIComponent(CALENDAR_ID)}/events?sendUpdates=all&conferenceDataVersion=1`, {
      method: "POST",
      body: JSON.stringify({
        summary: `Auxilee discovery call — ${fullName}`,
        description: `Scheduled through the Auxilee website.${data.company ? `\nCompany: ${data.company}` : ""}\nWork email: ${data.email}`,
        start: { dateTime: start.toISOString(), timeZone: CALENDAR_TIME_ZONE },
        end: { dateTime: end.toISOString(), timeZone: CALENDAR_TIME_ZONE },
        attendees: [{ email: data.email, displayName: fullName }],
        conferenceData: { createRequest: { requestId: crypto.randomUUID(), conferenceSolutionKey: { type: "hangoutsMeet" } } },
        reminders: { useDefault: true },
      }),
    });
    return { success: true, calendarLink: event.htmlLink ?? null, meetingLink: event.hangoutLink ?? null };
}
