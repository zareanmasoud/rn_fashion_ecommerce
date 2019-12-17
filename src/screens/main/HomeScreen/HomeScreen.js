import React from 'react';
import {Text} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import HomeHeader from 'features/home/layout/Header';
// eslint-disable-next-line import/no-extraneous-dependencies
import ProductList from 'features/home/ProductList';
// eslint-disable-next-line import/no-extraneous-dependencies
import Tabbar from 'features/home/layout/Tabbar';
// eslint-disable-next-line import/no-extraneous-dependencies
import ScreenContentFrame from 'lib/components/ScreenContentFrame';
// import styles from './styles';

export default function HomeScreen() {
  return (
    <ScreenContentFrame>
      <HomeHeader />
      {/* <View style={{width: '100%', height: 200, backgroundColor: 'red'}} /> */}
      {/* <View style={{width: '100%', height: 200, backgroundColor: 'yellow'}} /> */}
      {/* <View style={{width: '100%', height: 200, backgroundColor: 'blue'}} /> */}
      {/* <View style={{width: '100%', height: 200, backgroundColor: 'gray'}} /> */}
      {/* <View style={{width: '100%', height: 200, backgroundColor: 'green'}} /> */}
      {/* <View style={{width: '100%', height: 200, backgroundColor: 'white'}} /> */}
      {/* <View style={{width: '100%', height: 200, backgroundColor: 'black'}} /> */}
      <Text testID="View" />
      <ProductList />
      <Tabbar />
    </ScreenContentFrame>
  );
}

HomeScreen.navigationOptions = () => {
  return {
    header: null,
  };
};
