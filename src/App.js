import logo from './logo.svg';
import './App.css';
import './XP.css';
import React, { useEffect, useState } from "react";
import AffirmationWindow from './AffirmationWindow';
import SeasonWindow from './SeasonWindow';

function App() {
  
  return (
    <div className="App">
      <div className="Snow">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test.
        </p>n
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
      <div className='App-body'>
        <AffirmationWindow />
        <SeasonWindow />
      </div>
    </div>
  );
}

export default App;
