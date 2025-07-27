import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './compoument/Navbar/Navbar'
import Todo from './compoument/Todo/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Todo/>
    </>
  )
}

export default App
