import React from "react";
import EventCard from "../EventCard/EventCard";

const Content = () => {
  return (
    <main className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </main>
  );
};

export default Content;
