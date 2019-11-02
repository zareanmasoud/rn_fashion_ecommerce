import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import type {ItemModel} from './model';
import styles from './styles';

type Props = {
  data: ItemModel,
  spec: any,
};

const Item = ({data, spec}: Props) => {
  return (
    <TouchableOpacity onPress={() => spec.press()}>
      <View style={styles.itemView}>
        <Image source={data.photo} style={styles.itemImg} />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
