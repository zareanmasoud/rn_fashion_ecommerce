import React, {useContext} from 'react';
import {withNavigation} from 'react-navigation';
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
