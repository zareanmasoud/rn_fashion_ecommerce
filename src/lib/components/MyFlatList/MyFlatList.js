import React from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import type {ItemModel} from './Item/model';

let Item;
function renderItem(data, index) {
  return <Item data={data} index={index} />;
}

type Props = {
  data: ItemModel[],
  itemComponent: React.Node,
};

export default function MyFlatList({data, itemComponent}: Props) {
  Item = itemComponent;

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      // scrollEnabled={false}
      renderItem={({item, index}) => renderItem(item, index)}
    />
  );
}
