// components/FeaturedEvents.tsx
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { getAllEvents } from "@/lib/actions/event.actions"; // Update path as needed

export default async function FeaturedEvents() {
  // 1. Call the function directly (no URL, no fetch)
  const events = await getAllEvents();

  return (
    <ul className="events">
      {events && events.length > 0 ? (
        events.map((event: IEvent) => (
          <li key={event.title} className="list-none">
            <EventCard {...event} />
          </li>
        ))
      ) : (
        <p>No events found.</p>
      )}
    </ul>
  );
}