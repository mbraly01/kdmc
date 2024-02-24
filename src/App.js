import logo from './logo.svg';
import './App.css';
import Showdown from './Stages/Showdown';
import {Monster, monster_name} from './Monster/Monster';

import React from 'react';
function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <p>
          {Showdown()}
        </p>
      </header>
    </div>
    </>
  );

}

export default App;
