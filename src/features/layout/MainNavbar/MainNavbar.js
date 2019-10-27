import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Navbar from 'lib/components/Navbar';
// eslint-disable-next-line import/no-extraneous-dependencies
import R from 'res/R';
import {withNavigation} from 'react-navigation';

const getBackButton = navigation => {
  return {
    action: () => navigation.pop(),
    src: R.images.backButton,
  };
};

const getButtonTwo = () => {
  return {
    action: () => {},
    src: R.images.cartButton,
  };
};

const getLogoButton = () => {
  return {
    action: () => {},
    src: R.images.logoButton,
  };
};

type Props = {
  noBackButton?: boolean,
};

// The concrete Navbar
const MainNavbar = ({navigation, noBackButton}: Props) => {
  const backButton = {
    backButton: getBackButton(navigation),
  };
  return (
    <Navbar
      {...(!noBackButton && backButton)}
      buttonTwo={getButtonTwo()}
      logoButton={getLogoButton()}
    />
  );
};

MainNavbar.defaultProps = {
  noBackButton: false,
};

export default withNavigation(MainNavbar);
