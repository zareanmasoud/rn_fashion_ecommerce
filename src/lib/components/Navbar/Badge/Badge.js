import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import CartContext from '../../../../context/CartContext';
import styles from './styles';

export default function Badge() {
  const {cart} = useContext(CartContext);
  return (
    <View style={styles.container}>
      <Text testID="cart_text">{cart}</Text>
    </View>
  );
}
