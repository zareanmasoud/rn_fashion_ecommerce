import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import {PRODUCT_SCREEN} from 'screens/routes/constants';
import {withNavigation} from 'react-navigation';
import type {ItemModel} from './model';
import styles from './styles';

type Props = {
  item: ItemModel,
};

const Item = ({item, navigation}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(PRODUCT_SCREEN, {id: item.id})}>
      <View style={styles.itemView}>
        <Image source={item.photo} style={styles.itemImg} />
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(Item);
