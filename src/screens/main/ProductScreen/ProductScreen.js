import React from 'react';
import {View} from 'react-native';
import Tabbar from 'features/product/layout/Tabbar';
import Header from 'features/product/layout/Header';
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
