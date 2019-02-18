import React, { Component } from 'react';
import Square from '../Square/Square';
import './Board.css';

interface BoardProps {
    state: string[]
    handleSquareClicked: (index: number) => void
}

class Board extends Component <BoardProps> {
    render() {
        return (
            
            <div className="row board">
                {this.props.state.map((squareState, index) => <Square key={index} index={index} state={squareState} handleSquareClicked={this.props.handleSquareClicked}/>)}
            </div>

        );
    }
}

export default Board;
