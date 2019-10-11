import React from 'react';
import {Navbar} from "lib/components/Navbar";
import R from "res/R";

export const MainNavbar = props => {
  const {noBackButton, navigation} = props;
  return (
    <Navbar
      noBackButton={noBackButton}
      backButton={getBackButton(navigation)}
      buttonTwo={getButtonTwo()}
      logoButton={getLogoButton()}
    />
  )
};

const getBackButton = navigation => {
  return {
    action: () => navigation.pop(),
    src: R.images.back_button,
  }
};

const getButtonTwo = () => {
  return {
    action: () => {},
    src: R.images.cart_button,
  }
};

const getLogoButton = () => {
  return {
    action: () => {},
    src: R.images.logo_button,
  }
};
