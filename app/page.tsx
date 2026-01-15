// app/page.tsx
import { Suspense } from "react";
import ExploreBtn from "@/components/ExploreBtn";
import FeaturedEvents from "@/components/FeaturedEvents"; 

export default function Page() {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can Not Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        
        {/* The fallback is what the user sees while data is fetching */}
        <Suspense fallback={<p className="text-center">Loading events...</p>}>
          <FeaturedEvents />
        </Suspense>
      </div>
    </section>
  );
}