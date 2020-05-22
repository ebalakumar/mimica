import React from 'react';
import './App.css';

import Home from '../home/Home';
import Game from '../game/Game';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <Link to="/">
                <li className="primary-navbar">
                  <img id="logo" src={require("./favicon.ico")} /><span>Home</span>
                </li>
              </Link>
              <div className="secondary-navbar">
                <li>About</li>
                <li>How to play</li>
                <li>Other remote games</li>
              </div>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/game" component={Game} />
          </Switch>
        </main>
        <footer>
          <ul>
            <li>Contact</li>
            <li>Terms of service</li>
          </ul>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
