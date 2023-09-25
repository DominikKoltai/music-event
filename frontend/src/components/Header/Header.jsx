import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-700 p-10 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-300">Welcome to Music Event Site</h1>
      <p className="text-gray-300">
        Join us for a night of unforgettable performances
      </p>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-8">
        Get Tickets
      </button>
    </header>
  );
};

export default Header;
