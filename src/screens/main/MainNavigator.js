import {createStackNavigator} from 'react-navigation-stack';
import {HOME_SCREEN, PRODUCT_SCREEN} from '../routes/constants';
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';

const MainNavigator = createStackNavigator({
  [HOME_SCREEN]: {
    screen: HomeScreen,
  },
  [PRODUCT_SCREEN]: {
    screen: ProductScreen,
  },
});

export default MainNavigator;
