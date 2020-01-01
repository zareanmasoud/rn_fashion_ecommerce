import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

type Props = {
  handlePress: Function,
  src: string,
  logoMode?: boolean,
};

export default function NavbarButton({handlePress, src, logoMode}: Props) {
  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={styles.buttonView}>
        <Image source={src} style={styles.buttonImg(logoMode)} />
      </View>
    </TouchableOpacity>
  );
}

NavbarButton.defaultProps = {
  logoMode: false,
};
