import React from "react";
import Sidebar from "./components/Sidebar.jsx";

const App = () => {
  return (
    <div className="h-screen p-2">
      <div className="h-[90%] flex bg-fixed">
        <Sidebar/>
      </div>
    </div>
  )
}

export default App;