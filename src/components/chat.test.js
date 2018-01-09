import React from 'react';
import { shallow } from 'enzyme';
import Chat from './chat';

it('renders without crashing', () => {
    shallow(<Chat />);
});


// import App from './App';

it('renders welcome message', () => {
    const wrapper = shallow(<Chat />);
    const welcome = <h1>Chat</h1>;

    expect(wrapper.contains(welcome)).toEqual(true);
});

// describe('updateScroll', () => {
//     var element = document.createElement('div');
//
//     element.scrollTop = 100;
//     element.scrollheight = 200;
//
//     test('have the same value', () => {
//         expect(element.scrollTop).toEqual(element.scrollHeight);
//     });
// });
