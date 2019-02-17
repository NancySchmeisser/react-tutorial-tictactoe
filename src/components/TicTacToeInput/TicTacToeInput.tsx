import React, { Component } from 'react';
import './TicTacToeInput.css';


class TicTacToeInput extends Component {
    render() {
        return (
            <div className="board">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>
        );
    }
}

export default TicTacToeInput;
