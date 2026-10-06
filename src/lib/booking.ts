import { google } from "googleapis";
import { DateTime } from "luxon";
import { randomUUID } from "crypto";
import { z } from "zod";

const ZONE = "America/Los_Angeles";
const START_HOUR = 9;
const END_HOUR = 17;
const SLOT_MINUTES = 30;
const MIN_NOTICE_HOURS = 2;
const MAX_DAYS_AHEAD = 60;
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID ?? "primary";

export const availabilitySchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const bookingSchema = z.object({
  start: z.string().min(10),
  firstName: z.string().trim().min(1).max(60),
  lastName: z.string().trim().min(1).max(60),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(120).optional().default(""),
});

export type BookingInput = z.infer<typeof bookingSchema>;

function getCalendar() {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
  );
  auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
  return google.calendar({ version: "v3", auth });
}

/** Free 30-min slots for one date. 9-5 Pacific, Mon-Fri only. */
export async function getAvailableSlots(date: string): Promise<{ slots: string[] }> {
  const day = DateTime.fromISO(date, { zone: ZONE });
  if (!day.isValid) return { slots: [] };

  const now = DateTime.now().setZone(ZONE);
  if (day.weekday > 5) return { slots: [] };
  if (day < now.startOf("day")) return { slots: [] };
  if (day > now.plus({ days: MAX_DAYS_AHEAD }).endOf("day")) return { slots: [] };

  const dayStart = day.set({ hour: START_HOUR, minute: 0, second: 0, millisecond: 0 });
  const dayEnd = day.set({ hour: END_HOUR, minute: 0, second: 0, millisecond: 0 });

  const { data } = await getCalendar().freebusy.query({
    requestBody: {
      timeMin: dayStart.toUTC().toISO()!,
      timeMax: dayEnd.toUTC().toISO()!,
      timeZone: ZONE,
      items: [{ id: CALENDAR_ID }],
    },
  });

  const busy = (data.calendars?.[CALENDAR_ID]?.busy ?? []).map((b) => ({
    start: DateTime.fromISO(b.start!),
    end: DateTime.fromISO(b.end!),
  }));

  const earliest = now.plus({ hours: MIN_NOTICE_HOURS });
  const slots: string[] = [];
  for (
    let t = dayStart;
    t.plus({ minutes: SLOT_MINUTES }) <= dayEnd;
    t = t.plus({ minutes: SLOT_MINUTES })
  ) {
    const slotEnd = t.plus({ minutes: SLOT_MINUTES });
    const clash = busy.some((b) => t < b.end && slotEnd > b.start);
    if (!clash && t >= earliest) slots.push(t.toUTC().toISO()!);
  }
  return { slots };
}

export async function scheduleDiscoveryCall(input: BookingInput) {
  const { start, firstName, lastName, email, company } = input;

  const startDt = DateTime.fromISO(start).toUTC();
  if (!startDt.isValid) throw new Error("Invalid time");

  // Server-side check: slot must be inside 9-5 PT and still free.
  const dateKey = startDt.setZone(ZONE).toISODate()!;
  const { slots } = await getAvailableSlots(dateKey);
  if (!slots.includes(startDt.toISO()!)) {
    throw new Error("That time is no longer available");
  }

  const { data } = await getCalendar().events.insert({
    calendarId: CALENDAR_ID,
    conferenceDataVersion: 1, // needed to create the Meet link
    sendUpdates: "all", // sends the invite email to the guest
    requestBody: {
      summary: `Auxilee call: ${firstName} ${lastName}${company ? ` (${company})` : ""}`,
      start: { dateTime: startDt.toISO()!, timeZone: ZONE },
      end: { dateTime: startDt.plus({ minutes: SLOT_MINUTES }).toISO()!, timeZone: ZONE },
      attendees: [{ email, displayName: `${firstName} ${lastName}` }],
      conferenceData: {
        createRequest: {
          requestId: randomUUID(),
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    },
  });

  return {
    calendarLink: data.htmlLink ?? null,
    meetingLink: data.hangoutLink ?? null,
  };
}
