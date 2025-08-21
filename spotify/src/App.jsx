import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div className="h-screen p-2">
      <div className="h-[90%] flex bg-fixed">
        <Navbar/>
        <Sidebar/>
      </div>
    </div>
  )
}

export default App;