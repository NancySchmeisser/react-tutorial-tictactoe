import React, { Component } from 'react';
import './App.css';
import TicTacToeInput from './TicTacToeInput/TicTacToeInput';

class App extends Component {
  render() {
    return (
      <div className="App">
       <TicTacToeInput/>
      </div>
    );
  }
}

export default App;
