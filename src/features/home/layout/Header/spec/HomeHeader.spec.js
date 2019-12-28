import React from 'react';
import {shallow} from 'enzyme';
import HomeHeader from '../HomeHeader';

describe('HomeHeader Feature', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(<HomeHeader />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
