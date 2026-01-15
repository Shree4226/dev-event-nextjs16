import connectDB from "@/lib/mongodb";
import { Event } from "@/database";

export async function getEvents() {
  await connectDB();

  const events = await Event.find().sort({ createdAt: -1 }).lean();

  return events;
}
