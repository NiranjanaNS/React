import "./App.css";

import React from "react";
import Profilecard from "./components/Profilecard.jsx";
import image from "./assets/image.png";

const App = () => {
  const user = {
    name: "Alice",
    username: "@alice",
    age: "24",
    bio: "I'm a wonderful women.",
    img: image
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url(./assets/mountain.avif)] bg-cover bg-center text-white">
      <h1 className="text-3xl text-black font-bold mb-8">ProfileCard</h1>
      <Profilecard
        name={user.name}
        username={user.username}
        age={user.age}
        bio={user.bio}
        img={user.img}
      />
    </div>
  );
};

export default App;
