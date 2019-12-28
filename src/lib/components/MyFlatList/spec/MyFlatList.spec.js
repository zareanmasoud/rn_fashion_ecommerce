import React from 'react';
import {shallow} from 'enzyme';
import {View} from 'react-native';
import MyFlatList from '../MyFlatList';
import model from './model';

describe('MyFlatList Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(
        <MyFlatList data={model.products} itemComponent={<View />} />,
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
