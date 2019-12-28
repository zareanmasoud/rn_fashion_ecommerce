import React from 'react';
import {shallow} from 'enzyme';
import Badge from '../Badge';
import model from './model';

describe('Badge Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(
        <Badge cart={model.cart} cartTextTestID={model.cartTextTestID} />,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
