import React, { Component } from 'react';
import './Square.css';

interface SquareProps {
    index: number
    state: string
    winnerState: string
    handleSquareClicked: (index: number) => void
}

class Square extends Component<SquareProps> {

    render() {
        return (

            <div className={ "col-4 square" + ( this.props.winnerState=="X" ? " winner" : "") + ( this.props.state =="" ? "" : this.props.state=="X" ? " player1" : " player2") } onClick={() => {
                if (this.props.state == "") {
                    this.props.handleSquareClicked(this.props.index)
                }
            }
            }>
                {this.props.state}
            </div>

        );
    }
}

export default Square;
