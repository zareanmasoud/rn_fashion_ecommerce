import React from 'react';
import {shallow} from 'enzyme';
import Item from '../Item';
import model from './model';

const mockHandlePress = jest.fn();
mockHandlePress.mockReturnValue('Link on press invoked');
const enhancedModel = model.item(mockHandlePress);

describe('Item Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(<Item {...enhancedModel} index={0} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
