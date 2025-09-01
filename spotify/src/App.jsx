import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="h-screen bg-black p-2">
      <Navbar />
      <div className="flex h-[90%]">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
