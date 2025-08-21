import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './button'

function App() {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count + 1)
  }

  function sub() {
    setCount(count -1)
  }

  return (
    <div>
      <Button/>
      <Button/>
      <button onClick={add}>{count}</button>
      <button onClick={sub}>{count}</button>
    </div>
  )
}

export default App
