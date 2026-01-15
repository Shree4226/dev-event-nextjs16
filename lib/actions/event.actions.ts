'use server';

import Event from '@/database/event.model';
import connectDB from "@/lib/mongodb";

export const getSimilarEventsBySlug = async (slug: string) => {
    try {
        await connectDB();
        const event = await Event.findOne({ slug });

        return await Event.find({ _id: { $ne: event._id }, tags: { $in: event.tags } }).lean();
    } catch {
        return [];
    }
}

export const getAllEvents = async () => {
    try {
        await connectDB();

        // Find all events, sort by creation date (newest first)
        const events = await Event.find({})
            .sort({ createdAt: -1 })
            .lean();

        // Parse/Stringify is a trick to ensure all MongoDB ObjectIDs are converted to strings
        // This prevents the "Only plain objects can be passed to Client Components" error
        return JSON.parse(JSON.stringify(events));
    } catch (error) {
        console.log(error);
        return [];
    }
}


export const getEventBySlug = async (slug: string) => {
    try {
        await connectDB();

        // Find the event by its unique slug
        const event = await Event.findOne({ slug }).lean();

        // Return null if no event is found (let the component handle the 404)
        if (!event) return null;

        // Convert MongoDB object to plain JSON to avoid serialization warnings
        return JSON.parse(JSON.stringify(event));
    } catch (error) {
        console.log(error);
        return null;
    }
}

// ... your existing getSimilarEventsBySlug code ...