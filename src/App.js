import './App.css';
import React from "react";
import Header from "./components/Header"
import Fächer from "./components/Fächer"

function App() {
  return (
    <div>
      <Header title='Fachauswahl' />
      <Fächer />
    </div>


  );
}

export default App
