import React, {useContext} from 'react';
import {withNavigation} from 'react-navigation';
import ProductTabbarComponent from 'lib/components/ProductTabbar';
import specs from './specs';
import CartContext from '../../../../context/CartContext';

const ProductTabbar = () => {
  const {addToCart} = useContext(CartContext);

  return (
    <ProductTabbarComponent
      buttons={[specs.buttons.addWishlist, specs.buttons.fitting]}
      addToCart={specs.buttons.addToCart(addToCart)}
    />
  );
};

export default withNavigation(ProductTabbar);
