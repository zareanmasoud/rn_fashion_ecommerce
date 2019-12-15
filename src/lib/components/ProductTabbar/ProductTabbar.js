import React from 'react';
import {View} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import TabbarButton from 'lib/components/TabbarButton';
// eslint-disable-next-line import/no-extraneous-dependencies
import AddToCartButton from 'lib/components/AddToCartButton';
import styles from './styles';
import type {Button} from './model';

type Props = {
  specs: Button[],
};

const ProductTabbar = ({specs}: Props) => {
  const specsArray = Object.values(specs);
  const addToCart = specsArray.pop();
  return (
    <View style={styles.container}>
      {specsArray.map(buttonSpecs => (
        <TabbarButton specs={buttonSpecs} key={buttonSpecs.id} />
      ))}
      <AddToCartButton specs={addToCart} />
    </View>
  );
};

export default ProductTabbar;
