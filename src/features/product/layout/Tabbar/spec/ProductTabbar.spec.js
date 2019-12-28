import React from 'react';
import {shallow} from 'enzyme';
import ProductTabbar from '../ProductTabbar';

describe('ProductTabbar Feature', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(<ProductTabbar />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
