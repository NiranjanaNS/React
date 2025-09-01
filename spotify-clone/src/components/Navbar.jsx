import React, { useState, useEffect } from "react";
import { FaSpotify } from "react-icons/fa";
import SearchBar from "./Searchbar";
import NavLinks from "./Navlinks";
import AuthButtons from "./Authbuttons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* LEFT */}
      <div className="flex items-center space-x-4 flex-1">
        <FaSpotify className="text-white text-3xl" />

        {/* Home button */}
        <button className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-full">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732z"></path>
          </svg>
        </button>

        <SearchBar />
      </div>

      {/* RIGHT */}
      <div className="flex items-center space-x-6">
        <NavLinks />
        <AuthButtons />
      </div>
    </nav>
  );
};

export default Navbar;
