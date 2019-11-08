import React, {useContext} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import MainTabbar from 'lib/components/MainTabbar';
import {withNavigation} from 'react-navigation';
// eslint-disable-next-line import/no-extraneous-dependencies
import ProductMainTabbarLayout from 'lib/components/ProductMainTabbar';
import specs from './specs';
import CartContext from '../../../../context/CartContext';

// The concrete MainTabbar
const ProductMainTabbar = () => {
  const {addToCart} = useContext(CartContext);

  const mySpecs = {...specs, ...{addToCart: specs.addToCart(addToCart)}};

  function renderProductMainTabbarLayout() {
    return <ProductMainTabbarLayout specs={mySpecs} />;
  }

  return <MainTabbar layout={renderProductMainTabbarLayout} />;
};

export default withNavigation(ProductMainTabbar);
