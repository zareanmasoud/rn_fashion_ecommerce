import React from 'react';
import {shallow} from 'enzyme';
import HomeTabbar from '../HomeTabbar';

describe('HomeTabbar Feature', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<HomeTabbar />);
      expect(component).toMatchSnapshot();
    });
  });
});
