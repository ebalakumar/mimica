import React from 'react';
import './App.css';
import Home from '../home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li className="primary-navbar">
              <img id="logo" src={require("./favicon.ico")} /><span>Home</span>
            </li>
            <div className="secondary-navbar">
              <li>About</li>
              <li>How to play</li>
              <li>Other remote games</li>
            </div>
          </ul>
        </nav>
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <ul>
          <li>Contact</li>
          <li>Terms of service</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
