import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './TicTacToe';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TicTacToe/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

