import React, { Component } from 'react';
import Board from '../Board/Board';


interface TicTacToeState {
    board: string[];
    playersTurn: string;
    winner: string;
}

class TicTacToe extends Component<{}, TicTacToeState> {
    constructor(props: {}){
        super(props);

        this.state={
            board:["","","","","","","","",""],
            playersTurn:"X",
            winner:"",
        }
    }

    handleSquareClicked = (index: number) => {
        var newBoard = this.state.board.slice()
        newBoard[index]=this.state.playersTurn
        this.setState(
            {
                board:newBoard,
                playersTurn: this.state.playersTurn == 'X' ? 'O':'X'
            })
    } 
    render() {
        return (

            <div className="TicTacToe">
            <Board handleSquareClicked={this.handleSquareClicked} state={this.state.board}/>
            </div>

        );
    }
}

export default TicTacToe;
