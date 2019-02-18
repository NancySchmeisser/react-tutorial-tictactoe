import React, { Component } from 'react';
import Board from '../Board/Board';
import Player from '../../Player/Player';


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
            <Player name="Player 1" symbol="X" winnerSymbol={this.state.winner} currentPlayer={this.state.playersTurn}/>
            <Board handleSquareClicked={this.handleSquareClicked} state={this.state.board}/>
            <Player name="Player 2" symbol="O" winnerSymbol={this.state.winner} currentPlayer={this.state.playersTurn}/>
            </div>

        );
    }
}

export default TicTacToe;
