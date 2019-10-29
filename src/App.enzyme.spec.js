/**
 * @jest-environment jsdom
 */
import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App tested with airbnb enzyme', () => {
  test('App mount with enzyme', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
