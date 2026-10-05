import { availabilitySchema, getAvailableSlots } from "@/lib/booking";
import { ZodError } from "zod";
export async function POST(request: Request) {
  try {
    const data = availabilitySchema.parse(await request.json());
    return Response.json(await getAvailableSlots(data.date), { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    return Response.json({ error: error instanceof ZodError ? "Invalid date." : "Availability is temporarily unavailable." }, { status: error instanceof ZodError ? 400 : 503 });
  }
}
