import React, { useRef } from "react";

const Focusinput = () => {
    const input = useRef(null);

    // const handle = () => {
    //     input.current.focus();
    // }
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl mb-4">Focus</h1>

      <input
        ref={input}
        type="text"
        placeholder="Click button to focus me!"
        className="p-2 rounded-md text-white"
      />
{/* 
      <button
        onClick={handle}
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
      >
        Focus
      </button> */}
    </div>
  );
};

export default Focusinput;
