import React, {Component} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import HomeHeader from 'features/home/layout/HomeHeader';
// eslint-disable-next-line import/no-extraneous-dependencies
import Products from 'features/home/Products';
// import styles from './styles';

class HomeScreen extends Component {
  static navigationOptions = () => {
    return {
      header: <HomeHeader />,
    };
  };

  render() {
    return <Products />;
  }
}

export default HomeScreen;
