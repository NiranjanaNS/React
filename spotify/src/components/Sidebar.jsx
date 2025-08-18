import React, { useState } from "react";

const Sidebar = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [{ value: "Create a new playlist", label: "Create a new playlist" }];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="flex flex-col w-1/4">
      {/* Your Library */}
      <div className="rounded-xs bg-gray-950 text-2xl text-white flex flex-1 justify-between p-5">
        <h1 className="text-sm font-bold">Your Library</h1>
        <div>
          <label htmlFor="dropdown"></label>
          <select
            id="dropdown"
            value={selectedValue}
            onChange={handleChange}
          >
            <option className="flex border-0 rounded-b-lg" value="" disabled>
              +
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="border-2 rounded-xs bg-gray-950 text-2xl text-white flex flex-col p-5">
        <h1 className="text-sm font-bold">Create your own playlist</h1>
        <p className="text-xs font-medium">it's easy we'll help you</p>
        <button className="w-fit h-fit rounded-2xl bg-white text-xs text-black p-5">
          Create playlist
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
