import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Navbar from 'lib/components/Navbar';
// eslint-disable-next-line import/no-extraneous-dependencies
import {withNavigation} from 'react-navigation';
import specs from './specs';

type Props = {
  noBackButton?: boolean,
};

// The concrete Navbar
const MainNavbar = ({navigation, noBackButton}: Props) => {
  const backButton = {
    backButton: specs.backButtonSpec(navigation),
  };

  return (
    <Navbar
      {...(!noBackButton && backButton)}
      buttonTwo={specs.buttonTwoSpec}
      logoButton={specs.logoButtonSpec}
    />
  );
};

MainNavbar.defaultProps = {
  noBackButton: false,
};

export default withNavigation(MainNavbar);
