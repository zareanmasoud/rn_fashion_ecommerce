import React from 'react';
import {View} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import Tabbar from 'features/product/layout/Tabbar';
// eslint-disable-next-line import/no-extraneous-dependencies
import Header from 'features/product/layout/Header';
// import styles from './styles';

export default function ProductScreen() {
  return (
    <>
      <View flex={1} />
      <Tabbar />
    </>
  );
}

ProductScreen.navigationOptions = () => {
  return {
    header: <Header />,
  };
};
