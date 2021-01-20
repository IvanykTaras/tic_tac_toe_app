import React from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import PlayGround from './componets/PlayGround'
import HistoryOfMoves from './componets/HistoryOfMoves'
function App() {
  return (
    <div className="App">
      <PlayGround/>
      <HistoryOfMoves/>
    </div>
  );
}

export default App;
