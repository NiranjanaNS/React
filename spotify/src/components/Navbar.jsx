import React from "react";
import { FaSpotify } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-24 px-4 bg-black border-neutral-800">
      {/* Left section */}
      <div className="flex items-center space-x-4 w-1/2">
        {/* Spotify logo */}
        <div className="flex items-center space-x-4">
          <FaSpotify className="text-white text-5xl" />
          <button className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-full">
            <svg
              className="w-10 h-10 p-1 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732z"></path>
            </svg>
          </button>
        </div>

        {/* Search bar */}
        <div className="flex items-center bg-neutral-800 rounded-full px-3 py-1 w-full max-w-md hover:ring-1 hover:ring-neutral-600">
          <svg
            className="w-10 h-10 text-gray-400 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10.5 2a8.5 8.5 0 015.92 14.42l4.09 4.09a1 1 0 01-1.42 1.42l-4.09-4.09A8.5 8.5 0 1110.5 2zm0 2a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" />
          </svg>
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-6">
        <a href="#" className="text-md font-medium text-gray-300 hover:text-white">
          Premium
        </a>
        <a href="#" className="text-md font-medium text-gray-300 hover:text-white">
          Support
        </a>
        <a href="#" className="text-md font-medium text-gray-300 hover:text-white">
          Download
        </a>
        <button className="text-md font-medium text-gray-300 hover:text-white">
          Sign up
        </button>
        <button className="bg-white text-black font-semibold px-4 py-1 rounded-full hover:scale-105 transition">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
