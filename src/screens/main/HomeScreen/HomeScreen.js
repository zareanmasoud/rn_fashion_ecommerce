import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import HomeHeader from 'features/home/layout/HomeHeader';
// eslint-disable-next-line import/no-extraneous-dependencies
import ProductList from 'features/home/ProductList';
// import styles from './styles';

export default function HomeScreen() {
  return <ProductList />;
}

HomeScreen.navigationOptions = () => {
  return {
    header: <HomeHeader />,
  };
};
