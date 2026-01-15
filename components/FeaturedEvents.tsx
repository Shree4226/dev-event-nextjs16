// components/FeaturedEvents.tsx
import EventCard from "@/components/EventCard";
import { getEvents } from "@/lib/getEvents";
import { IEvent } from "@/database";

export default async function FeaturedEvents() {
  // Directly call the DB function. No fetch needed.
  const events = await getEvents();

  if (!events || events.length === 0) {
    return <p className="text-center text-gray-500">No events found.</p>;
  }

  return (
    <ul className="events">
      {events.map((event: IEvent) => (
        <li key={event.title} className="list-none">
          <EventCard {...event} />
        </li>
      ))}
    </ul>
  );
}