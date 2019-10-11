import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {PRODUCT_SCREEN} from "screens/routes/constants";
import styles from "./styles";

export const Item = props => {
  const {item, navigation} = props;
  return (
    <View style={styles.container}>
      {
        renderItem(item, navigation)
      }
    </View>
  )
};

const renderItem = (item, navigation) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(PRODUCT_SCREEN, {id: item.id})}>
      <View style={styles.itemView}>
        <Image source={item.photo} style={styles.itemImg}/>
      </View>
    </TouchableOpacity>
  )
};
