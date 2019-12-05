import React from 'react';
import {View} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import TabbarButton from 'lib/components/TabbarButton';
// eslint-disable-next-line import/no-extraneous-dependencies
import AddToCartButton from 'lib/components/AddToCartButton';
import styles from './styles';
import type {Button} from './model';

function renderButton(specs, index) {
  return <TabbarButton specs={specs} key={index} />;
}

function renderAddToCart(specs) {
  return <AddToCartButton specs={specs} />;
}

type Props = {
  specs: Button[],
};

const ProductTabbar = ({specs}: Props) => {
  const specsArray = Object.values(specs);
  const addToCart = specsArray.pop();
  return (
    <View style={styles.container}>
      {[
        specsArray.map((buttonSpecs, index) =>
          renderButton(buttonSpecs, index),
        ),
        renderAddToCart(addToCart),
      ]}
    </View>
  );
};

export default ProductTabbar;
