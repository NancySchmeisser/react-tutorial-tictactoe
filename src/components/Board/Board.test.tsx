import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Board state='X'/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

