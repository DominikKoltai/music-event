import React from "react";
import EventCard from "../EventCard/EventCard";

const Content = () => {
  return (
    <main className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="">
        <EventCard />
      </div>
    </main>
  );
};

export default Content;
