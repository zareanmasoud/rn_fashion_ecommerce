import React from 'react';
import {View} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import Tabbar from 'features/product/layout/Tabbar';
// eslint-disable-next-line import/no-extraneous-dependencies
import Header from 'features/product/layout/Header';
// eslint-disable-next-line import/no-extraneous-dependencies
import ScreenContentFrame from 'lib/components/ScreenContentFrame';
// import styles from './styles';

export default function ProductScreen() {
  return (
    <ScreenContentFrame>
      <Header />
      <View flex={1} />
      <Tabbar />
    </ScreenContentFrame>
  );
}

ProductScreen.navigationOptions = () => {
  return {
    header: null,
  };
};
