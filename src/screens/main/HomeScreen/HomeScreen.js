import React from 'react';
import {Text} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import HomeHeader from 'features/home/layout/Header';
// eslint-disable-next-line import/no-extraneous-dependencies
import ProductList from 'features/home/ProductList';
// eslint-disable-next-line import/no-extraneous-dependencies
import Tabbar from 'features/home/layout/Tabbar';
// eslint-disable-next-line import/no-extraneous-dependencies
// import ScreenContentFrame from 'lib/components/ScreenContentFrame';
// import styles from './styles';

export default function HomeScreen() {
  return (
    <>
      {/* <ScreenContentFrame> */}
      <Text testID="View" />
      <ProductList />
      <Tabbar />
      {/* </ScreenContentFrame> */}
    </>
  );
}

HomeScreen.navigationOptions = () => {
  return {
    header: <HomeHeader />,
  };
};
