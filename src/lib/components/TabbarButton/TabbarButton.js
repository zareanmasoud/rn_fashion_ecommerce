import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

type Props = {
  handlePress: Function,
  src: string,
  // text: string,
  mode?: 'home' | 'product',
};

export default function TabbarButton({handlePress, src, mode}: Props) {
  return (
    <TouchableOpacity testID="tabbar_button" onPress={() => handlePress()}>
      <View style={styles.buttonView(mode)}>
        <Image source={src} style={styles.buttonImg} />
      </View>
    </TouchableOpacity>
  );
}

TabbarButton.defaultProps = {
  mode: 'home',
};
