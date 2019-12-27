import React from 'react';
import {shallow} from 'enzyme';
import ProductScreen from '../ProductScreen';

describe('ProductScreen', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<ProductScreen />);
      expect(component).toMatchSnapshot();
    });
  });
});
