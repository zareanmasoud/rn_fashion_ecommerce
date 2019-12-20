import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import type {ItemModel} from './model';
import styles from './styles';

type Props = {
  data: ItemModel,
  index: number,
  spec: any,
};

const Item = ({data, index, spec}: Props) => {
  return (
    <TouchableOpacity testID={`${index}`} onPress={() => spec.press()}>
      <View style={styles.itemView}>
        <Image source={data.photo} style={styles.itemImg} />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
