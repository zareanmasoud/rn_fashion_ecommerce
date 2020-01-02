import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

type Props = {
  handlePress: Function,
  src: string,
  mode?: 'default' | 'logo',
};

export default function NavbarButton({handlePress, src, mode}: Props) {
  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={styles.buttonView}>
        <Image source={src} style={styles.buttonImg(mode)} />
      </View>
    </TouchableOpacity>
  );
}

NavbarButton.defaultProps = {
  mode: 'default',
};
