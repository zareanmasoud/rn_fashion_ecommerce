import React from 'react';
import {View} from 'react-native';
import ProductTabbar from 'features/product/layout/Tabbar';
import ProductHeader from 'features/product/layout/Header';
import ScreenContentFrame from 'lib/components/ScreenContentFrame';
// import styles from './styles';

export default function ProductScreen() {
  return (
    <ScreenContentFrame>
      <ProductHeader />
      <View flex={1} />
      <ProductTabbar />
    </ScreenContentFrame>
  );
}

ProductScreen.navigationOptions = () => {
  return {
    header: null,
  };
};
