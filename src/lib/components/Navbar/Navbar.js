import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import type {Button} from './model';
import NavbarButton from './NavbarButton';
import CartButton from './CartButton';

function renderButton(button) {
  return <NavbarButton spec={button} />;
}

function renderCart(button) {
  return <CartButton spec={button} />;
}

function renderEmptyView() {
  return <View style={styles.emptyView} />;
}

function renderButtonOne(backButton, logoButton) {
  if (backButton === undefined) {
    if (logoButton) return renderButton(logoButton);
    return renderEmptyView();
  }
  return renderButton(backButton);
}

type Props = {
  backButton?: Button,
  logoButton?: Button,
  buttonTwo: Button,
};

// The abstract Navbar
const Navbar = ({backButton, buttonTwo, logoButton}: Props) => {
  return (
    <View style={styles.container}>
      {[renderButtonOne(backButton, logoButton), renderCart(buttonTwo)]}
    </View>
  );
};

Navbar.defaultProps = {
  backButton: undefined,
  logoButton: undefined,
};

export default Navbar;
