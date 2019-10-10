import {createSwitchNavigator} from 'react-navigation';
import PrivateStack from './stacks/PrivateStack';
import {InitialScreen} from '../InitialScreen';
import {PRIVATE, INITIAL_SCREEN} from './constants';

export default createSwitchNavigator(
  {
    [INITIAL_SCREEN]: InitialScreen,
    [PRIVATE]: PrivateStack,
  },
  {
    initialRouteName: INITIAL_SCREEN,
  }
);
