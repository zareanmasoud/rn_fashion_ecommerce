import React from 'react';
import {View, FlatList} from 'react-native';
import {Item} from "./Item";
import styles from './styles';

export const ItemList = props => {
  const {data, navigation} = props;
  return (
    <View style={styles.container}>
      {
        renderFlatList(data, navigation)
      }
    </View>
  );
};

const renderFlatList = (data, navigation) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      scrollEnabled={false}
      renderItem={({item, index}) => renderItem(item, index, navigation)}
    />
  )
};

const renderItem = (item, index, navigation) => {
  return (
    <Item
      key={index}
      item={item}
      navigation={navigation}
    />
  );
};
