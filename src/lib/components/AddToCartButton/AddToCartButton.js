import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

type Props = {
  specs: any,
};

export default function AddToCartButton({specs}: Props) {
  return (
    <TouchableOpacity testID="add_to_cart_button" onPress={() => specs.press()}>
      <View style={styles.buttonView}>
        <Image source={specs.src} style={styles.buttonImg} />
      </View>
    </TouchableOpacity>
  );
}
