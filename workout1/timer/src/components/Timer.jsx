import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  const timer = () => {
    setTime((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      timer();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center w-1/2 h-1/2 bg-green-300 rounded-4xl">
        <h1 className="text-4xl pb-1">Timer</h1>
        <p className="text-2xl pt-1">{time}s</p>
      </div>
    </div>
  );
};

export default Timer;
