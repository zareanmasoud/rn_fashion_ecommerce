import React from 'react';
import {shallow} from 'enzyme';
import ProductTabbar from '../ProductTabbar';
import model from './model';

describe('ProductTabbar Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(
        <ProductTabbar buttons={model.buttons} addToCart={model.addToCart} />,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
