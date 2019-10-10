import {createSwitchNavigator} from 'react-navigation';
import MainNavigator from '../main/MainNavigator';
import {InitialScreen} from '../InitialScreen';
import {MAIN, INITIAL_SCREEN} from './constants';

export default createSwitchNavigator(
  {
    [INITIAL_SCREEN]: InitialScreen,
    [MAIN]: MainNavigator,
  },
  {
    initialRouteName: INITIAL_SCREEN,
  }
);
