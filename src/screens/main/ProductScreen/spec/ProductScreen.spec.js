import React from 'react';
import {shallow} from 'enzyme';
import ProductScreen from '../ProductScreen';

describe('ProductScreen', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(<ProductScreen />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
