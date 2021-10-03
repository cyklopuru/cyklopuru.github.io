import './App.css';
import React from "react";
import Header from "./components/Header";
import Fächer from "./components/Fächer";
import Isometric from "./components/fächer/Isometric";

function App() {
  return (
    <React.Fragment>
      <div>
        <Header title='Fachauswahl' />
        <Fächer />
      </div>
      <div className='Fächer'>
       {Isometric}
      </div>
      </React.Fragment>

      );
}

      export default App
