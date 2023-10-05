import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 pr-6">
      <ul className="flex justify-between items-center">
        <li>
          <img src="https://i.imgur.com/e589CTd.png" alt="logo" className="h-20" />
        </li>
        <li>
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="/events" className="text-gray-300 hover:text-white">
            Events
          </a>
        </li>
        <li>
          <a href="/artists" className="text-gray-300 hover:text-white">
            Artists
          </a>
        </li>
        <li>
          <a href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
