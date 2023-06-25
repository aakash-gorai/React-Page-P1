import { useState } from 'react'
import './App.css'
import Navbar from "C:/Users/Aakash/Desktop/react-page/components/Navbar";
import MainContent from "C:/Users/Aakash/Desktop/react-page/components/MainContent";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <MainContent />
    </>
  )
}

export default App
