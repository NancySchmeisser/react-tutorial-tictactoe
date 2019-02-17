import React, { Component } from 'react';
import './App.css';
import TicTacToeInput from './TicTacToeInput/TicTacToeInput';

class App extends Component {
  constructor(props){
    super (props)

    this.state={
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "0",
      
    }
  }
  render() {
    return (
      <div className="App">
       <TicTacToeInput/>
      </div>
    );
  }
}

export default App;
