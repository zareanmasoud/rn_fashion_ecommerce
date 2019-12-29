import React from 'react';
import ProductTabbarComponent from 'lib/components/ProductTabbar';
import {withNavigation} from 'react-navigation';
import model from './model';
import {useCartContext} from '../../../../context/CartContext';

const ProductTabbar = () => {
  const {addToCart} = useCartContext();

  return (
    <ProductTabbarComponent
      buttons={[model.buttons.addWishlist, model.buttons.fitting]}
      addToCart={model.buttons.addToCart(addToCart)}
    />
  );
};

export default withNavigation(ProductTabbar);
