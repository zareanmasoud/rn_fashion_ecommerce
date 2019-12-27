import React from 'react';
import {shallow} from 'enzyme';
import model from './model';
import HomeTabbar from '../HomeTabbar';

describe('HomeTabbar Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<HomeTabbar buttons={model.buttons} />);
      expect(component).toMatchSnapshot();
    });
  });
});
