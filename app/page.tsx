import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { getEvents } from "@/lib/getEvents";

type EventPreview = {
  _id: string;
  title: string;
  slug: string;
  image: string;
  location: string;
  date: string;
  time: string;
};

const Page = async () => {
  const events = await getEvents(); // ✅ cached by Next automatically

  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can not Miss
      </h1>

      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event: EventPreview) => (
            <li key={event._id} className="list-none">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
