// components/FeaturedEvents.tsx
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function FeaturedEvents() {
  // Move the fetch here
  'use cache'
  cacheLife('hours')
  const response = await fetch(`${BASE_URL}/api/events`, {
    next: { revalidate: 3600 }
  });
  
  // Ideally handle non-200 errors here
  if (!response.ok) {
     throw new Error("Failed to fetch events");
  }

  const { events } = await response.json();

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