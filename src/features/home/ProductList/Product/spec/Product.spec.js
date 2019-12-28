import React from 'react';
import {shallow} from 'enzyme';
import Product from '../Product';
import model from './model';

describe('Product Feature', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(<Product data={model.product} index={0} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
