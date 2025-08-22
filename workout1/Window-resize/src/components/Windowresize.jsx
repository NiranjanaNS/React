import React, { useEffect, useState } from "react";

const Windowresize = () => {
  const [resize, setResize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setResize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return (
    <div className="flex border-2 w-full h-screen justify-center items-center">
      <div className="flex flex-col border-2 border-yellow-800 w-96 h-96 items-center justify-center text-white font-bold">
        <h1 className="border-2 text-center text-7xl text-amber-950 p-2 mb-3">Window Resize</h1>
        <h1 className="border-2 text-3xl text-amber-950 p-2">Try resizing the window</h1>
        <p className="border-2 text-3xl text-amber-950 p-2">
          {resize.width}px × {resize.height}px
        </p>
      </div>
    </div>
  );
};

export default Windowresize;
