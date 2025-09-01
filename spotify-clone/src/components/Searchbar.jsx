import React from "react";

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center bg-neutral-800 rounded-full px-3 py-1 w-full max-w-md hover:ring-1 hover:ring-neutral-600 border border-white/10">
      <svg
        className="w-5 h-5 text-gray-400 mr-2"
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
  );
};

export default SearchBar;
