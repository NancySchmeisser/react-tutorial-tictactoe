import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToeInput from './TicTacToeInput';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TicTacToeInput />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  