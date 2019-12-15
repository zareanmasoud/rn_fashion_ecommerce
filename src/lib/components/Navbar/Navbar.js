import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import type {Button} from './model';
import ButtonOne from './ButtonOne';
import CartButton from './CartButton';

type Props = {
  backButton: Button,
  logoButton: Button,
  buttonTwo: Button,
};

// The abstract Navbar
const Navbar = ({backButton, buttonTwo, logoButton}: Props) => {
  return (
    <View style={styles.container}>
      <ButtonOne backButton={backButton} logoButton={logoButton} />
      <CartButton spec={buttonTwo} />
    </View>
  );
};

export default Navbar;
