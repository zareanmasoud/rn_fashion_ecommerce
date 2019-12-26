import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

type Props = {
  press: Function,
  src: string,
  // text: string,
};

export default function AddToCartButton({press, src}: Props) {
  return (
    <TouchableOpacity testID="add_to_cart_button" onPress={() => press()}>
      <View style={styles.buttonView}>
        <Image source={src} style={styles.buttonImg} />
      </View>
    </TouchableOpacity>
  );
}
