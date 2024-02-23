import logo from './logo.svg';
import './App.css';
import Showdown from './Stages/Showdown';
import {Monster, monster_name} from './MonsterII/Monster';

import React from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1> {monster_name(new Monster("White Lion",1))}</h1>
          <h2>{Showdown()}</h2>
        </a>
      </header>
    </div>
  );
}

export default App;
