import { useState } from "react";
import "./App.css";
import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <MainContent />
    </>
  );
}

export default App;
