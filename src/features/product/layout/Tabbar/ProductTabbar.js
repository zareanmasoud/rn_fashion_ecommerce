import React, {useContext} from 'react';
import {withNavigation} from 'react-navigation';
import ProductTabbarComponent from 'lib/components/ProductTabbar';
import model from './model';
import CartContext from '../../../../context/CartContext';

const ProductTabbar = () => {
  const {addToCart} = useContext(CartContext);

  return (
    <ProductTabbarComponent
      buttons={[model.buttons.addWishlist, model.buttons.fitting]}
      addToCart={model.buttons.addToCart(addToCart)}
    />
  );
};

export default withNavigation(ProductTabbar);
