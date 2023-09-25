import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-between">
          <li>
            <a href="/" className="text-xl font-bold">
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
    </div>
  );
};

export default Navbar;
