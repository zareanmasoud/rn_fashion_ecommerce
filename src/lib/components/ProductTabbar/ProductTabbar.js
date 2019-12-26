import React from 'react';
import {View} from 'react-native';
import TabbarButton from 'lib/components/TabbarButton';
import AddToCartButton from 'lib/components/AddToCartButton';
import styles from './styles';
import type {Specs} from './model';

type Props = {
  specs: Specs[],
};

const ProductTabbar = ({specs}: Props) => {
  const specsArray = Object.values(specs);
  const addToCart = specsArray.pop();
  const TabbarButtons = specsArray.map(specsItem => (
    <TabbarButton {...specsItem} key={specsItem.id} />
  ));

  return (
    <View style={styles.container}>
      {TabbarButtons}
      <AddToCartButton specs={addToCart} />
    </View>
  );
};

export default ProductTabbar;
