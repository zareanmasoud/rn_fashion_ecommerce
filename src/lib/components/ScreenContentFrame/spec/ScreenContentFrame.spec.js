import React from 'react';
import {View} from 'react-native';
import {shallow} from 'enzyme';
import ScreenContentFrame from '../ScreenContentFrame';

describe('ScreenContentFrame Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(
        <ScreenContentFrame>
          <View />
        </ScreenContentFrame>,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
