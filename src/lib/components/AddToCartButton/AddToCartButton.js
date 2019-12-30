import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

type Props = {
  handlePress: Function,
  text: string,
};

export default function AddToCartButton({handlePress, text}: Props) {
  return (
    <TouchableOpacity testID="add_to_cart_button" onPress={() => handlePress()}>
      <View style={styles.buttonView}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
