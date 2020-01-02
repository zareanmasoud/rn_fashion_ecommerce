import React from 'react';
import {View} from 'react-native';
import TabbarButton from 'lib/components/TabbarButton';
import AddToCartButton from 'lib/components/AddToCartButton';
import styles from './styles';
import type {Button} from './types';

type Props = {
  buttons: Button[],
  addToCart: Button,
};

const ProductTabbar = ({buttons, addToCart}: Props) => {
  const TabbarButtons = buttons.map(button => (
    <TabbarButton {...button} key={button.id} mode="product" />
  ));

  return (
    <View style={styles.container}>
      {TabbarButtons}
      <AddToCartButton {...addToCart} />
    </View>
  );
};

export default ProductTabbar;
