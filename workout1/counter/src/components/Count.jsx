import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const sub = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col w-1/2 h-1/2 bg-blue-300 rounded-3xl justify-center items-center">
        <h1 className="text-5xl pb-2">Counter</h1>
        <p className="text-4xl pt-2">{count}</p>
        <div className="flex w-80 h-40 p-5 justify-between">
          <button className="px-8 py-1 text-5xl text-center font-bold m-2 rounded-full bg-blue-600 hover:bg-blue-900" onClick={add}>+</button>
          <button className="px-10 py-1 text-5xl text-center font-bold m-2 rounded-full bg-blue-600 hover:bg-blue-900" onClick={sub}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Count;
