import React from 'react';
import {shallow} from 'enzyme';
import input from './input';
import HomeTabbar from '../HomeTabbar';

describe('HomeTabbar Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<HomeTabbar buttons={input.buttons} />);
      expect(component).toMatchSnapshot();
    });
  });
});
