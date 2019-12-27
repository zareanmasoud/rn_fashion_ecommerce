import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import type {Photo} from './types';
import styles from './styles';

type Props = {
  photo: Photo,
  press: Function,
  index: number,
};

const Item = ({photo, press, index}: Props) => {
  return (
    <TouchableOpacity testID={`${index}`} onPress={() => press()}>
      <View style={styles.itemView}>
        <Image source={photo} style={styles.itemImg} />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
