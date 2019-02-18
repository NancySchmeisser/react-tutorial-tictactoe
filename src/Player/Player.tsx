import React, { Component } from 'react';

interface PlayerProps {
    name: string
    symbol: string
    winnerSymbol: string
    currentPlayer: string
}

class Player extends Component<PlayerProps> {

    render() {
        var alertClass: string = "alert alert-warning"
        if (this.props.winnerSymbol == ""){
            alertClass = this.props.currentPlayer == this.props.symbol ? "alert alert-info" : "alert alert-warning"
        } else {
            alertClass = this.props.winnerSymbol == this.props.symbol ? "alert alert-success" : "alert alert-danger"
        }
        return (

            <div className={"Player " + alertClass} >
                {this.props.name} {this.props.symbol}
            </div>

        );
    }
}

export default Player;
