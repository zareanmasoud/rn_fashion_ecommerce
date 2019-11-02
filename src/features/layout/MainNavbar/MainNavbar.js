import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Navbar from 'lib/components/Navbar';
// eslint-disable-next-line import/no-extraneous-dependencies
import R from 'res/R';
import {withNavigation} from 'react-navigation';

type Props = {
  noBackButton?: boolean,
};

// The concrete Navbar
const MainNavbar = ({navigation, noBackButton}: Props) => {
  const backButtonSpec = {
    press: () => navigation.pop(),
    src: R.images.backButton,
  };

  const buttonTwoSpec = {
    press: () => {},
    src: R.images.cartButton,
  };

  const logoButtonSpec = {
    press: () => {},
    src: R.images.logoButton,
  };

  const backButton = {
    backButton: backButtonSpec,
  };

  return (
    <Navbar
      {...(!noBackButton && backButton)}
      buttonTwo={buttonTwoSpec}
      logoButton={logoButtonSpec}
    />
  );
};

MainNavbar.defaultProps = {
  noBackButton: false,
};

export default withNavigation(MainNavbar);
