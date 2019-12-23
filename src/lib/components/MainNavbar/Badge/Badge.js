import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

type Props = {
  resources: any,
};

export default function Badge({resources}: Props) {
  const {cart, cartTextTestID} = resources;

  return (
    <View style={styles.container}>
      <Text testID={cartTextTestID}>{cart}</Text>
    </View>
  );
}
