import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Square state='X'/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it('renders the correct output', () =>{
    const wrapper= mount(<Square state='X'/>)
    expect(wrapper.text()).toBe('X')
})

it('renders the correct output', () =>{
    const wrapper= mount(<Square state='O'/>)
    expect(wrapper.text()).toBe('O')
})