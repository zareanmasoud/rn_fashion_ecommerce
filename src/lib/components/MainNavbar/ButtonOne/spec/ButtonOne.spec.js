import React from 'react';
import {shallow} from 'enzyme';
import ButtonOne from '../ButtonOne';
import model from './model';

describe('ButtonOne Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(<ButtonOne {...model.buttons} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
