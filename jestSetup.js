// https://github.com/kmagiera/react-native-gesture-handler/issues/344
import {NativeModules as RNNativeModules} from 'react-native';

RNNativeModules.UIManager = RNNativeModules.UIManager || {};
RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {};
RNNativeModules.RNGestureHandlerModule = RNNativeModules.RNGestureHandlerModule || {
  State: {BEGAN: 'BEGAN', FAILED: 'FAILED', ACTIVE: 'ACTIVE', END: 'END'},
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
};
RNNativeModules.PlatformConstants = RNNativeModules.PlatformConstants || {
  forceTouchAvailable: false,
};
//

// https://stackoverflow.com/questions/58257932/cannot-find-module-nativeanimatedhelper-when-using-jest-mock
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// https://github.com/facebook/jest/issues/6434
jest.useFakeTimers();
