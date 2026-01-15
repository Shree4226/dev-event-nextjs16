import { Suspense } from "react";
import EventDetails from "@/components/EventDetails";

// Define the shape of props correctly for Next.js 15+
type Props = {
  params: Promise<{ slug: string }>;
};

const EventDetailsPage = async ({ params }: Props) => {
  // ✅ CORRECT: Await the params to get the actual object
  const { slug } = await params;

  return (
    <main>
      <Suspense fallback={<div>Loading event details...</div>}>
        {/* Pass the actual string 'slug', not a promise */}
        <EventDetails slug={slug} />
      </Suspense>
    </main>
  );
};

export default EventDetailsPage;