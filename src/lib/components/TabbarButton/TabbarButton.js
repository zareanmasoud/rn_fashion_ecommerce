import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

type Props = {
  handlePress: Function,
  src: string,
  // text: string,
};

export default function TabbarButton({handlePress, src}: Props) {
  return (
    <TouchableOpacity testID="tabbar_button" onPress={() => handlePress()}>
      <View style={styles.buttonView}>
        <Image source={src} style={styles.buttonImg} />
      </View>
    </TouchableOpacity>
  );
}
