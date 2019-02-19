import React, { Component } from 'react';
import './App.css';
import TicTacToe from './TicTacToe/TicTacToe';

class App extends Component {
  constructor(props: {}) {
    super(props)


  }
  render() {
    return (
      <TicTacToe/>

    )
  }
}




export default App;