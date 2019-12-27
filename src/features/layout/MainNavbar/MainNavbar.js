import React from 'react';
import MainNavbarComponent from 'lib/components/MainNavbar';
import {withNavigation} from 'react-navigation';
import model from './model';
import {useCartContext} from '../../../context/CartContext';

type Props = {
  noBackButton?: boolean,
  cartTextTestID?: string,
};

const MainNavbar = ({navigation, noBackButton, cartTextTestID}: Props) => {
  const {cart} = useCartContext();

  const backButton = {
    backButton: model.backButton(navigation),
  };

  return (
    <MainNavbarComponent
      {...(!noBackButton && backButton)}
      buttonTwo={model.buttonTwo(cart, cartTextTestID)}
      logoButton={model.logoButton}
    />
  );
};

MainNavbar.defaultProps = {
  noBackButton: false,
  cartTextTestID: 'cart_text',
};

export default withNavigation(MainNavbar);
