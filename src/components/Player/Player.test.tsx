import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Player name="Player 1" symbol="X" winnerSymbol="" currentPlayer="X"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

