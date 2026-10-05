import { bookingSchema, scheduleDiscoveryCall } from "@/lib/booking";
import { ZodError } from "zod";
export async function POST(request: Request) {
  try {
    const data = bookingSchema.parse(await request.json());
    return Response.json(await scheduleDiscoveryCall(data), { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    const invalid = error instanceof ZodError;
    const unavailable = error instanceof Error && error.message.includes("no longer available");
    return Response.json({ error: invalid ? "Please review your details." : unavailable ? "That time is no longer available." : "Scheduling is temporarily unavailable." }, { status: invalid ? 400 : unavailable ? 409 : 503 });
  }
}
