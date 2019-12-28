import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

type Props = {
  handlePress: Function,
  src: string,
};

export default function NavbarButton({handlePress, src}: Props) {
  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={styles.buttonView}>
        <Image source={src} style={styles.buttonImg} />
      </View>
    </TouchableOpacity>
  );
}
