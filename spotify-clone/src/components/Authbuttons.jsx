import React from "react";

const AuthButtons = () => {
  return (
    <div className="flex items-center space-x-4">
      <button className="text-sm font-medium text-gray-300 hover:text-white">
        Sign up
      </button>
      <button className="bg-white text-black font-semibold px-4 py-1 rounded-full hover:scale-105 transition">
        Log in
      </button>
    </div>
  );
};

export default AuthButtons;
