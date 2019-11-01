import React from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import type {ItemModel} from './Item/model';

type Props = {
  data: ItemModel[],
  itemComponent: React.Node,
};

export default function MyFlatList({data, itemComponent}: Props) {
  const Item = itemComponent;
  function renderItem(item, index) {
    return <Item key={index} item={item} />;
  }

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      scrollEnabled={false}
      renderItem={({item, index}) => renderItem(item, index)}
    />
  );
}
