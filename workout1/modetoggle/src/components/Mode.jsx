import React, { useState } from 'react'

const Mode = () => {
    const [mode, setMode] = useState(false);

  return (
    <div className={`flex flex-col w-full h-screen justify-center item-center transition-colors duration-500 ${mode ? "bg-black text-white" : "bg-white text-black"}`}>
        <div className='flex justify-center items-center'>
            <button className='text-2xl bg-red-700 p-5 rounded-full shadow-2xl ' onClick={() => setMode(!mode)}>{mode ? "Dark-mode" : "Light-mode"}</button>
        </div>
    </div>
  )
}

export default Mode;

