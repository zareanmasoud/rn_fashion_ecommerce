import React from 'react';
import {shallow} from 'enzyme';
import ProductList from '../ProductList';

describe('ProductList Feature', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(<ProductList />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
