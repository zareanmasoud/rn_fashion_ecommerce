import React from 'react';
import {shallow} from 'enzyme';
import MainNavbar from '../MainNavbar';

describe('MainNavbar Feature', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(<MainNavbar />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
