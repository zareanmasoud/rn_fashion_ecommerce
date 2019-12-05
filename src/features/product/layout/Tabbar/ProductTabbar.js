import React, {useContext} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {withNavigation} from 'react-navigation';
// eslint-disable-next-line import/no-extraneous-dependencies
import Tabbar from 'lib/components/ProductTabbar';
import specs from './specs';
import CartContext from '../../../../context/CartContext';

// The concrete Tabbar
const ProductTabbar = () => {
  const {addToCart} = useContext(CartContext);

  const enhancedSpecs = {...specs, ...{addToCart: specs.addToCart(addToCart)}};

  return <Tabbar specs={enhancedSpecs} />;
};

export default withNavigation(ProductTabbar);
