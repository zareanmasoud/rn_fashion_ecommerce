import React from 'react';
import {shallow} from 'enzyme';
import NavbarButton from '../NavbarButton';
import model from './model';

describe('NavbarButton Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(
        <NavbarButton
          handlePress={model.navbarButton.handlePress}
          src={model.navbarButton.src}
        />,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
