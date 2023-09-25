import React from "react";

const EventCard = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <img
        src="https://source.unsplash.com/random"
        alt="Event"
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-xl font-bold mb-2">Rock Music Night</h3>
      <p className="text-gray-300">August 15, 2022</p>
      <p className="text-gray-300">The Roxy, Los Angeles</p>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">
        Buy Tickets
      </button>
    </div>
  );
};

export default EventCard;
