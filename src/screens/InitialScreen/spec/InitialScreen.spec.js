import React from 'react';
import {shallow} from 'enzyme';
import InitialScreen from '../InitialScreen';

describe('InitialScreen', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(<InitialScreen />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
