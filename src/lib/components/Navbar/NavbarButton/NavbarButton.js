import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

type Props = {
  spec: any,
};

export default function NavbarButton({spec}: Props) {
  return (
    <TouchableOpacity onPress={() => spec.press()}>
      <View style={styles.buttonView}>
        <Image source={spec.src} style={styles.buttonImg} />
      </View>
    </TouchableOpacity>
  );
}
