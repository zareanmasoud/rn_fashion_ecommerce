import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import type {Photo} from './types';
import styles from './styles';

type Props = {
  photo: Photo,
  handlePress: Function,
  index: number,
};

const Item = ({photo, handlePress, index}: Props) => {
  return (
    <TouchableOpacity testID={`${index}`} onPress={() => handlePress()}>
      <View style={styles.itemView}>
        <Image source={photo} style={styles.itemImg} />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
