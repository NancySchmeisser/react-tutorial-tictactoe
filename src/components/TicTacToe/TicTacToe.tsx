import React, { Component } from 'react';
import Board from '../Board/Board';
import Player from '../Player/Player';


interface TicTacToeState {
    board: string[];
    winnerBoard: string[];
    playersTurn: string;
    winner: string;
}

class TicTacToe extends Component<{}, TicTacToeState> {
    constructor(props: {}){
        super(props);

        this.state={
            board:["","","","","","","","",""],
            winnerBoard:["", "","","","","","","","",""],
            playersTurn:"X",
            winner:"",
        }
    }

    handleSquareClicked = (index: number) => {
        if(this.state.winner!=="") return
        var newBoard = this.state.board.slice()
        newBoard[index]=this.state.playersTurn
        this.setState(
            {
                board:newBoard,
                playersTurn: this.state.playersTurn == 'X' ? 'O':'X'
            })
        this.checkForWinner(newBoard)
    } 

    checkForWinner = (newBoard: string[]) => {
        if(newBoard[0] == newBoard[1] && newBoard[1] == newBoard[2] && newBoard[0] != "") { this.setWinner(newBoard[0], [0,1,2]) }
        if(newBoard[3] == newBoard[4] && newBoard[4] == newBoard[5] && newBoard[3] != "") { this.setWinner(newBoard[3], [3,4,5]) }
        if(newBoard[6] == newBoard[7] && newBoard[7] == newBoard[8] && newBoard[6] != "") { this.setWinner(newBoard[6], [6,7,8]) }
        if(newBoard[0] == newBoard[3] && newBoard[3] == newBoard[6] && newBoard[0] != "") { this.setWinner(newBoard[0], [0,3,6]) }
        if(newBoard[1] == newBoard[4] && newBoard[4] == newBoard[7] && newBoard[1] != "") { this.setWinner(newBoard[1], [1,4,7]) }
        if(newBoard[2] == newBoard[5] && newBoard[5] == newBoard[8] && newBoard[2] != "") { this.setWinner(newBoard[2], [2,5,8]) }
        if(newBoard[0] == newBoard[4] && newBoard[4] == newBoard[8] && newBoard[0] != "") { this.setWinner(newBoard[0], [0,4,8]) }
        if(newBoard[2] == newBoard[4] && newBoard[4] == newBoard[6] && newBoard[2] != "") { this.setWinner(newBoard[2], [2,4,6]) }
    }
    

    setWinner ( winnerSymbol: string, winnerSquares: number[]) {
        var newWinnerBoard = this.state.winnerBoard.slice()
        winnerSquares.forEach( nextSquare => newWinnerBoard[nextSquare] = "X")
        this.setState({winner: winnerSymbol, winnerBoard: newWinnerBoard})
    }
    render() {
        return (

            <div className="TicTacToe">
            <Player name="Player 1" symbol="X" winnerSymbol={this.state.winner} currentPlayer={this.state.playersTurn}/>
            <Board handleSquareClicked={this.handleSquareClicked} winnerBoard={this.state.winnerBoard} state={this.state.board}/>
            <Player name="Player 2" symbol="O" winnerSymbol={this.state.winner} currentPlayer={this.state.playersTurn}/>

            </div>

        );
    }
}

export default TicTacToe;
