import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      <Navbar />

      <div className="flex pt-16">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Trending songs</h1>
          {/* TODO: Add SongGrid component */}
        </main>
      </div>
    </div>
  );
};

export default App;
