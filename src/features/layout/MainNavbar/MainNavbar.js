import React from 'react';
import MainNavbarComponent from 'lib/components/MainNavbar';
import {withNavigation} from 'react-navigation';
import specs from './specs';
import {useCartContext} from '../../../context/CartContext';

type Props = {
  noBackButton?: boolean,
  cartTextTestID?: string,
};

const MainNavbar = ({navigation, noBackButton, cartTextTestID}: Props) => {
  const {cart} = useCartContext();

  const backButton = {
    backButton: specs.backButtonSpec(navigation),
  };

  return (
    <MainNavbarComponent
      {...(!noBackButton && backButton)}
      buttonTwo={specs.buttonTwoSpec(cart, cartTextTestID)}
      logoButton={specs.logoButtonSpec}
    />
  );
};

MainNavbar.defaultProps = {
  noBackButton: false,
  cartTextTestID: 'cart_text',
};

export default withNavigation(MainNavbar);
