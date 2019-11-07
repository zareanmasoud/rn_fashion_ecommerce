import React from 'react';
import {View} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import MainTabbar from 'features/product/layout/MainTabbar';
// eslint-disable-next-line import/no-extraneous-dependencies
import Header from 'features/product/layout/Header';
// import styles from './styles';

export default function ProductScreen() {
  return (
    <>
      <View flex={1} />
      <MainTabbar />
    </>
  );
}

ProductScreen.navigationOptions = () => {
  return {
    header: <Header />,
  };
};
