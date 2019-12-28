import React from 'react';
import {shallow} from 'enzyme';
import CartButton from '../CartButton';
import model from './model';

describe('CartButton Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(
        <CartButton buttonTwo={model.buttonTwo(0, 'cart_text')} />,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
