import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import HomeHeader from 'features/home/layout/Header';
// eslint-disable-next-line import/no-extraneous-dependencies
import ProductList from 'features/home/ProductList';
// eslint-disable-next-line import/no-extraneous-dependencies
import MainTabbar from 'features/home/layout/MainTabbar';
// import styles from './styles';

export default function HomeScreen() {
  return (
    <>
      <ProductList />
      <MainTabbar />
    </>
  );
}

HomeScreen.navigationOptions = () => {
  return {
    header: <HomeHeader />,
  };
};
