import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between">
        <li>
          <a href="/" className="text-xl font-bold text-gray-300 hover:text-white">
            Music Event Site
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white">
            Events
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white">
            Artists
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
