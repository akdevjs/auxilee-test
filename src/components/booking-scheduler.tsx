"use client";
import { useMemo, useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const zone = "America/Los_Angeles";
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MAX_DAYS_AHEAD = 60;

function todayKey() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: zone, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}
function keyOf(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}
function addDaysKey(key: string, days: number) {
  const d = new Date(`${key}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}
function formatDate(date: string, options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("en-US", { ...options, timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}
function formatSlot(slot: string) {
  return new Intl.DateTimeFormat("en-US", { timeZone: zone, hour: "numeric", minute: "2-digit" }).format(new Date(slot));
}

type BookingResult = { calendarLink: string | null; meetingLink: string | null };

export function BookingScheduler() {
  const today = useMemo(() => todayKey(), []);
  const lastDay = useMemo(() => addDaysKey(today, MAX_DAYS_AHEAD), [today]);
  const [ty = 2026, tm = 1] = today.split("-").map(Number);
  const [view, setView] = useState({ y: ty, m: tm - 1 });
  const [selectedDate, setSelectedDate] = useState<string>();
  const [slots, setSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string>();
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<BookingResult>();

  const firstWeekday = new Date(Date.UTC(view.y, view.m, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(view.y, view.m + 1, 0)).getUTCDate();
  const cells: (number | null)[] = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];
  const monthLabel = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(view.y, view.m, 1)));
  const canPrev = view.y > ty || (view.y === ty && view.m > tm - 1);
  const [ly = 2026, lm = 1] = lastDay.split("-").map(Number);
  const canNext = view.y < ly || (view.y === ly && view.m < lm - 1);
  const shift = (n: number) => setView(v => { const d = new Date(Date.UTC(v.y, v.m + n, 1)); return { y: d.getUTCFullYear(), m: d.getUTCMonth() }; });

  const chooseDate = async (date: string) => {
    setSelectedDate(date); setSelectedSlot(undefined); setSlots([]); setError(""); setLoadingSlots(true);
    try { const response = await fetch("/api/booking/slots", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ date }) });
      if (!response.ok) throw new Error("Could not load availability");
      const result = await response.json() as { slots: string[] };
      setSlots(result.slots); }
    catch { setError("We couldn’t load availability. Please try again."); }
    finally { setLoadingSlots(false); }
  };
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); if (!selectedSlot) return;
    const form = new FormData(event.currentTarget); setSubmitting(true); setError("");
    try {
      const response = await fetch("/api/booking/schedule", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ start: selectedSlot, firstName: String(form.get("firstName") ?? ""), lastName: String(form.get("lastName") ?? ""), email: String(form.get("email") ?? ""), company: String(form.get("company") ?? "") }) });
      const result = await response.json() as BookingResult & { error?: string };
      if (!response.ok) throw new Error(result.error ?? "Could not schedule call");
      setResult(result);
    } catch (caught) {
      setError(caught instanceof Error && caught.message.includes("no longer available") ? "That time was just booked. Please select another slot." : "We couldn’t schedule the call. Please review your details and try again.");
    } finally { setSubmitting(false); }
  };

  if (result) return (
    <div className="p-2" role="status">
      <span className="grid size-10 place-items-center bg-action text-primary"><Check className="size-5" /></span>
      <h3 className="mt-6 font-display text-3xl">Your call is scheduled.</h3>
      <p className="mt-4 max-w-xl leading-7 text-muted-foreground">A calendar invitation has been sent to your work email, and the meeting is on our calendar too.</p>
      {result.meetingLink && <a href={result.meetingLink} className="mt-7 inline-flex items-center text-sm font-medium">Open Google Meet <span className="ml-2 text-action">→</span></a>}
    </div>
  );

  if (selectedSlot && selectedDate) return (
    <form className="grid gap-5 sm:grid-cols-2" onSubmit={submit}>
      <div className="sm:col-span-2">
        <Button type="button" variant="ghost" className="h-auto px-0 text-muted-foreground" onClick={() => setSelectedSlot(undefined)}><ArrowLeft className="size-4" />Choose another time</Button>
        <h4 className="mt-3 font-display text-2xl">Tell us who’s joining.</h4>
        <p className="mt-2 text-sm text-muted-foreground">{formatDate(selectedDate, { weekday: "long", month: "long", day: "numeric" })} at {formatSlot(selectedSlot)} Pacific Time</p>
      </div>
      {[{ name: "firstName", label: "First Name", auto: "given-name" }, { name: "lastName", label: "Last Name", auto: "family-name" }, { name: "email", label: "Work Email", auto: "email" }, { name: "company", label: "Company", auto: "organization" }].map(field => (
        <label key={field.name}>
          <span className="text-xs font-medium">{field.label}</span>
          <input required={field.name !== "company"} name={field.name} type={field.name === "email" ? "email" : "text"} autoComplete={field.auto} className="mt-2 w-full border border-input bg-background px-3 py-3 text-sm outline-none focus:border-foreground" />
        </label>
      ))}
      <div className="sm:col-span-2">
        <Button type="submit" variant="action" size="callout" disabled={submitting}>{submitting ? "Scheduling…" : "Schedule Call"}<ArrowRight className="text-primary" /></Button>
      </div>
      {error && <p role="alert" className="text-sm text-destructive sm:col-span-2">{error}</p>}
    </form>
  );

  return (
    <div className="grid gap-8 md:grid-cols-[1fr_220px]">
      <div>
        <div className="flex items-center justify-between">
          <p className="font-medium">{monthLabel}</p>
          <div className="flex gap-1">
            <Button type="button" variant="outline" size="icon" className="size-8" disabled={!canPrev} onClick={() => shift(-1)} aria-label="Previous month"><ChevronLeft className="size-4" /></Button>
            <Button type="button" variant="outline" size="icon" className="size-8" disabled={!canNext} onClick={() => shift(1)} aria-label="Next month"><ChevronRight className="size-4" /></Button>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-7 text-center text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
          {WEEKDAYS.map(d => <span key={d} className="py-2">{d}</span>)}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((day, i) => {
            if (!day) return <span key={`e${i}`} />;
            const key = keyOf(view.y, view.m, day);
            const wd = (firstWeekday + day - 1) % 7;
            const disabled = wd === 0 || wd === 6 || key < today || key > lastDay;
            const selected = key === selectedDate;
            return (
              <button key={key} type="button" disabled={disabled} onClick={() => void chooseDate(key)}
                className={cn("aspect-square w-full text-sm transition-colors", disabled ? "cursor-not-allowed text-muted-foreground/40" : "cursor-pointer border border-border hover:border-foreground", selected && "border-action bg-action font-medium text-primary hover:border-action", key === today && !selected && !disabled && "font-semibold underline underline-offset-4")}>
                {day}
              </button>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Monday–Friday, 9:00 AM–5:00 PM Pacific Time. Weekends are unavailable.</p>
      </div>
      <div className="md:border-l md:border-border md:pl-6">
        <div className="flex items-center gap-2"><Clock className="size-4 text-muted-foreground" /><p className="text-sm font-medium">{selectedDate ? formatDate(selectedDate, { weekday: "long", month: "short", day: "numeric" }) : "Select a date"}</p></div>
        <div className="mt-4 max-h-[340px] overflow-y-auto pr-1">
          {!selectedDate ? <p className="text-sm text-muted-foreground">Available times will appear here.</p>
            : loadingSlots ? <p className="text-sm text-muted-foreground">Checking the calendar…</p>
            : slots.length ? <div className="grid grid-cols-2 gap-2 md:grid-cols-1">{slots.map(slot => <Button key={slot} type="button" variant="outline" onClick={() => setSelectedSlot(slot)}>{formatSlot(slot)}</Button>)}</div>
            : <p className="text-sm text-muted-foreground">No times remain for this date. Please choose another day.</p>}
        </div>
        {error && <p role="alert" className="mt-4 text-sm text-destructive">{error}</p>}
      </div>
    </div>
  );
}
