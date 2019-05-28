import React, { Component } from 'react';
import GuessTheFlagGame from './GuessTheFlagGame';
import worldImg from './world.jpg';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="flag-app">
        <header
          className="title-header"
          style={{ backgroundImage: `url(${ worldImg })` }}
        >
          <h1 className="title-text">Guess The Flag</h1>
        </header>
        <GuessTheFlagGame />
      </div>
    );
  }
}

export default App;