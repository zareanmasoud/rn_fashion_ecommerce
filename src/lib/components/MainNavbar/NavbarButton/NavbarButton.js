import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

type Props = {
  press: Function,
  src: string,
};

export default function NavbarButton({press, src}: Props) {
  return (
    <TouchableOpacity onPress={() => press()}>
      <View style={styles.buttonView}>
        <Image source={src} style={styles.buttonImg} />
      </View>
    </TouchableOpacity>
  );
}
