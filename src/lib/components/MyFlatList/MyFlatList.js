import React from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import type {Data} from './Item/types';

type Props = {
  data: Data[],
  itemComponent: React.Node,
};

export default function MyFlatList({data, itemComponent}: Props) {
  const Item = itemComponent;

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      // scrollEnabled={false}
      renderItem={({item, index}) => <Item data={item} index={index} />}
    />
  );
}
