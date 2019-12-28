import React from 'react';
import {shallow} from 'enzyme';
import ProductHeader from '../ProductHeader';

describe('ProductHeader Feature', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(<ProductHeader />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
