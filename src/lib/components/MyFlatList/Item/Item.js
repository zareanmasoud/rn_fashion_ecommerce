import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import type {Data} from './model';
import styles from './styles';

type Props = {
  data: Data,
  index: number,
  specs: any,
};

const Item = ({data, index, specs}: Props) => {
  return (
    <TouchableOpacity testID={`${index}`} onPress={() => specs.press()}>
      <View style={styles.itemView}>
        <Image source={data.photo} style={styles.itemImg} />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
