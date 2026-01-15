// app/page.tsx
import ExploreBtn from "@/components/ExploreBtn";
import FeaturedEvents from "@/components/FeaturedEvents";
import { Suspense } from "react";

// ✅ This tells Next.js to cache this page and re-check for new data every hour (3600s)
// This replaces the need for 'use cache' or 'cacheLife'
export const revalidate = 3600; 

const Page = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Cannot Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        {/* ✅ Suspense prevents the "Blocking Route" error you saw earlier */}
        <Suspense fallback={<div className="text-center">Loading events...</div>}>
           <FeaturedEvents />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;