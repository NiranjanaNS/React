import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { RiHeadphoneFill } from "react-icons/ri";

const Sidebar = () => {
  const [drop, setDrop] = useState(false);

  const Dropdown = () => {
    setDrop((prev) => !prev);
  };

  const Hover = () => {
    setDrop((prev) => !prev);
  }
  
  return (
    <div className="flex flex-col rounded-md bg-neutral-900 w-1/3 relative p-2">
      {/* Your Library */}
      <div className="text-sm text-white flex justify-between items-center p-5 z-0 ">
        <h1 className="text-sm font-bold">Your Library</h1>

        <button
          onClick={Dropdown}
          onMouseOver={Hover}
          className="flex justify-center text-2xl font-bold cursor-pointer border-4 border-neutral-900 rounded-full hover:bg-neutral-700"
        >
          <IoAdd />
        </button>

        <div
          className={`absolute right-5 top-14 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg w-40 transition-all duration-200
           ${drop ? "block" : "hidden"}`}
        >
          <div className="p-2 flex items-center hover:bg-neutral-700 cursor-pointer text-sm text-white">
            <RiHeadphoneFill /> Create Playlist
          </div>
        </div>

            <div
          className={`absolute right-5 top-14 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg w-40 transition-all duration-200
           ${drop ? "block" : "hidden"}`}
        >
          <div className="p-2 flex items-center hover:bg-neutral-700 cursor-pointer text-sm text-white">
            <RiHeadphoneFill /> Create Playlist & Folder
          </div>
        </div>

      </div>

      <div className="flex flex-col overscroll-y-auto p-2 z-10">
        <div className="border-neutral-950 rounded-xl bg-neutral-800 text-2xl text-white flex flex-col p-5">
          <div className="flex flex-col">
            <h1 className="text-sm font-bold">Create your own playlist</h1>
            <p className="text-xs font-medium">it's easy we'll help you</p>
          </div>
          <button className="w-fit h-fit rounded-2xl bg-white text-sm font-bold px-6 text-black p-2 mt-4">
            Create playlist
          </button>
        </div>

        <div className="border-neutral-950 rounded-xl bg-neutral-800 text-2xl text-white flex flex-col p-5 mt-2">
          <h1 className="text-sm font-bold">
            Let's find some podcasts to follow
          </h1>
          <p className="text-xs font-medium">
            We'll keep you updated on new episodes
          </p>
          <button className="w-fit h-fit rounded-2xl bg-white text-sm font-bold px-6 text-black p-2 mt-4">
            Browser podcasts
          </button>
        </div>
      </div>

      <div className="text-xs text-gray-500 mt-4 cursor-pointer p-2">
        <div className="py-16">
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="hover:underline cursor-pointer">Legal</span>
            <span className="hover:underline cursor-pointer">
              Privacy Center
            </span>
            <span className="hover:underline cursor-pointer">Cookies</span>
            <span className="hover:underline cursor-pointer">About Ads</span>
            <span className="hover:underline cursor-pointer">
              Accessibility
            </span>
          </div>
          <a href="https://www.spotify.com/in-en/legal/cookies-policy/"><span className="hover:text-white">Cookies</span></a>
        </div>

        <button className="border border-gray-500 text-white px-3 py-1 rounded-full text-xs hover:bg-white hover:text-black transition">
          English
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
