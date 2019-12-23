import React, {useContext} from 'react';
import {withNavigation} from 'react-navigation';
import ProductTabbarComponent from 'lib/components/ProductTabbar';
import specs from './specs';
import CartContext from '../../../../context/CartContext';

const ProductTabbar = () => {
  const {addToCart} = useContext(CartContext);

  const enhancedSpecs = {...specs, ...{addToCart: specs.addToCart(addToCart)}};

  return <ProductTabbarComponent specs={enhancedSpecs} />;
};

export default withNavigation(ProductTabbar);
