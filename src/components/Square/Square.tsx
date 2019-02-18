import React, { Component } from 'react';
import './Square.css';

interface SquareProps {
    state: string;
}

class Square extends Component <SquareProps> {
    render() {
        return (
            
            <div className="col-4 square">
                {this.props.state}
            </div>
            
        );
    }
}

export default Square;
