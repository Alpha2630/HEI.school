// import Nabar from "./components/Navbar";
// import Footer from "./components/Footer";
import { useState } from "react";
import './App.css'
// props parent  makan am enfants 
function App() {
  const [count, setCount] = useState(0);
  const handleDecrement = () => {
    return setCount ((prev) => )
  }
  return (
    <>
      <button onClick={handleDecrement}>-</button>
      <h1> {count} </h1>
      <button onClick={handleDecrement}>+</button>
    </>
  )
}

export default App
