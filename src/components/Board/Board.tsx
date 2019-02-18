import React, { Component } from 'react';
import Square from '../Square/Square';
import './Board.css';

interface BoardProps {
    state: string[]
}

class Board extends Component <BoardProps> {
    render() {
        return (
            
            <div className="row board">
                {this.props.state.map((squareState, index) => <Square key={index} state={squareState}/>)}
            </div>

        );
    }
}

export default Board;
