import React from "react";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-60 bg-black h-screen pt-20 px-4 space-y-4">
      <div className="text-white font-semibold text-lg">Your Library</div>
      <div className="bg-neutral-800 rounded-lg p-4 text-white">
        <p className="font-bold">Create your first playlist</p>
        <p className="text-sm text-gray-400">It’s easy, we’ll help you</p>
        <button className="mt-3 bg-white text-black px-3 py-1 rounded-full font-semibold text-sm">
          Create playlist
        </button>
      </div>
      <div className="bg-neutral-800 rounded-lg p-4 text-white">
        <p className="font-bold">Let’s find some podcasts to follow</p>
        <p className="text-sm text-gray-400">We’ll keep you updated</p>
        <button className="mt-3 bg-white text-black px-3 py-1 rounded-full font-semibold text-sm">
          Browse podcasts
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
