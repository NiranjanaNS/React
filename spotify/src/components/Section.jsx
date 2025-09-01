import React, { useRef } from "react";
import { IoIosPlay } from "react-icons/io";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Section = ({ title, items, type = "song" }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <button className="text-sm text-gray-400 hover:underline">Show all</button>
      </div>
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 rounded-full"
      >
        <IoChevronBack className="text-white w-6 h-6" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 hover:bg-black/80 rounded-full"
      >
        <IoChevronForward className="text-white w-6 h-6" />
      </button>
      <div
        ref={scrollRef}
        className="flex overflow-hidden space-x-4 scroll-smooth"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-[180px] bg-neutral-900 p-3 rounded-lg hover:bg-neutral-800 cursor-pointer relative"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-44 object-cover ${
                  type === "artist" ? "rounded-full" : "rounded-md"
                }`}
              />
              {type !== "artist" && (
                <button className="absolute bottom-2 right-2 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition">
                  <IoIosPlay className="text-black w-5 h-5" />
                </button>
              )}
            </div>
            <h3 className="text-white mt-2 font-medium truncate">{item.title}</h3>
            <p className="text-gray-400 text-sm truncate">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
