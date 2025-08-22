import React from "react";

const Profilecard = ({ name, username, age, img, bio }) => {
  return (
    <div className="flex flex-col items-center bg-neutral-900 text-white p-6 rounded-2xl shadow-lg max-w-xs">
      <div className="flex mt-2 justify-center items-center">
        <img
          src={img}
          className="flex w-30 border-white border-2 rounded-full"
        />
        <div className="flex flex-col justify-center items-center ml-3">
          <h2 className="text-2xl font-bold">{name}</h2>
          <h4 className="text-gray-400">{username}</h4>
        </div>
        <h3 className="flex ml-5 px-4 p-3 font-bold bg-white text-black text-center rounded-full hover:bg-gray-200">{age}</h3>
      </div>
      <p className="mt-3 text-center text-sm">{bio}</p>
    </div>
  );
};

export default Profilecard;
