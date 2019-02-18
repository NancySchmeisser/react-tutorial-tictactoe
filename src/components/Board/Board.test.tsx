import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Board state={[""]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it ('renders the board correctly', () =>{
    const wrapper = mount(<Board state={["X","","","O","X","","O","",""]}/>)
    const square1 = wrapper.find('Square').findWhere( square => square.key() == "0");
    expect(square1.text()).toBe('X');
    const square6 = wrapper.find('Square').findWhere(square => square.key() == "6");
    expect(square6.text()).toBe("O");
})

