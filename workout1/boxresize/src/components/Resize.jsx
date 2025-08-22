import React, { useEffect, useRef, useState } from "react";

const Resize = () => {
  const [resize, setResize] = useState({
    width: 0,
    height: 0,
  });
  const boxRef = useRef(null);

  const handleResize = () => {
      if (boxRef.current) {
        setResize({
          width: boxRef.current.clientWidth,
          height: boxRef.current.clientHeight,
        });
      }
    };

  useEffect(() => {
    const observer = new ResizeObserver(handleResize)

    if (boxRef.current) observer.observe(boxRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div  ref={boxRef} className="flex flex-col w-1/2 h-1/2 border-1 border-black overflow-auto resize justify-center items-center bg-red-950">
        <h1 className="text-white">Try resizing the box</h1>
        <p className="text-white">{resize.width}px × {resize.height}px</p>
      </div>
    </div>
  );
};

export default Resize;
