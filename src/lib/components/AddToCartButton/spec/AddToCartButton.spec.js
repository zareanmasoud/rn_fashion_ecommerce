import React from 'react';
import {shallow} from 'enzyme';
import AddToCartButton from '../AddToCartButton';
import model from './model';

const mockHandlePress = jest.fn();
mockHandlePress.mockReturnValue('Link on press invoked');
const enhancedModel = model.addToCart(mockHandlePress);

describe('AddToCartButton Component', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const wrapper = shallow(<AddToCartButton {...enhancedModel} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Interaction', () => {
    describe('handlePress', () => {
      let wrapper;
      beforeEach(() => {
        wrapper = shallow(<AddToCartButton {...enhancedModel} />);
        jest.clearAllMocks();
      });

      it('should call handlePress', () => {
        wrapper
          .find({testID: 'add_to_cart_button'})
          .first()
          .props()
          .onPress();
        expect(mockHandlePress.mock.calls.length).toBe(1);
        expect(mockHandlePress).toHaveBeenCalled();
        expect(mockHandlePress).toHaveBeenCalledTimes(1);
      });

      // it('should call openURL if url is provided', () => {
      //   wrapper.handlePress();
      //   // 3. mockOpenURL should be called since we have passed in 'url' prop
      //   expect(mockOpenURL).toHaveBeenCalled();
      //   expect(mockOpenURL).toHaveBeenCalledTimes(1);
      //   expect(mockOpenURL).toHaveBeenCalledWith('https://www.test.com');
      // });
      //
      // it('should not call openURL if url is nor provided', () => {
      //   const innerInstance = shallow(
      //     <AddToCartButton label="test label" handlePress={mockHandlePress} />,
      //   ).instance();
      //   innerInstance.handlePress();
      //   // 4. mockOpenURL should NOT be called as we have NOT passed in 'url' prop
      //   expect(mockOpenURL).not.toHaveBeenCalled();
      // });
    });
  });
});
