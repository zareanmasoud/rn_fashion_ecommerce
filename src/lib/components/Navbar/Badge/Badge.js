import React from 'react';
import {View, Text} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
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
