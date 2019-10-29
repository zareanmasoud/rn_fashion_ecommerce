import React from 'react';
import {View, FlatList} from 'react-native';
import Item from './Item';
import styles from './styles';
import type {ItemModel} from './Item/model';

const renderItem = (item, index) => {
  return <Item key={index} item={item} />;
};

const renderFlatList = data => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      scrollEnabled={false}
      renderItem={({item, index}) => renderItem(item, index)}
    />
  );
};

type Props = {
  data: ItemModel[],
};

const ItemList = ({data}: Props) => {
  return <View style={styles.container}>{renderFlatList(data)}</View>;
};

export default ItemList;
