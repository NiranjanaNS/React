import React from "react";
import { HiOutlineArrowDownTray } from "react-icons/hi2";

const NavLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">
        Premium
      </a>
      <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">
        Support
      </a>
      <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">
        Download
      </a>
      <button className="flex items-center text-sm font-medium text-gray-300 hover:text-white">
        <HiOutlineArrowDownTray className="mr-1" /> Install App
      </button>
    </div>
  );
};

export default NavLinks;
