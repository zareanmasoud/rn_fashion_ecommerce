import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

type Props = {
  cart: any,
  cartTextTestID: string,
};

export default function Badge({cart, cartTextTestID}: Props) {
  return (
    <View style={styles.container}>
      <Text testID={cartTextTestID}>{cart}</Text>
    </View>
  );
}
