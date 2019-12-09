import React from 'react';
import {Text} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import HomeHeader from 'features/home/layout/Header';
// eslint-disable-next-line import/no-extraneous-dependencies
import ProductList from 'features/home/ProductList';
// eslint-disable-next-line import/no-extraneous-dependencies
import Tabbar from 'features/home/layout/Tabbar';
// import styles from './styles';

export default function HomeScreen() {
  return (
    <>
      <Text testID="View" />
      <ProductList />
      <Tabbar />
    </>
  );
}

HomeScreen.navigationOptions = () => {
  return {
    header: <HomeHeader />,
  };
};
