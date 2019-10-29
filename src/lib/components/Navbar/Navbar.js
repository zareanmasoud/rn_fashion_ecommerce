import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import type {Button} from './model';

const renderButton = button => {
  return (
    <TouchableOpacity onPress={() => button.action()}>
      <View style={styles.buttonView}>
        <Image source={button.src} style={styles.buttonImg} />
      </View>
    </TouchableOpacity>
  );
};

const renderEmptyView = () => {
  return <View style={styles.emptyView} />;
};

const renderButtonOne = (backButton, logoButton) => {
  if (backButton === undefined) {
    if (logoButton) return renderButton(logoButton);
    return renderEmptyView();
  }
  return renderButton(backButton);
};

type Props = {
  backButton?: Button,
  logoButton?: Button,
  buttonTwo: Button,
};

// The abstract Navbar
const Navbar = ({backButton, buttonTwo, logoButton}: Props) => {
  return (
    <View style={styles.container}>
      {[renderButtonOne(backButton, logoButton), renderButton(buttonTwo)]}
    </View>
  );
};

Navbar.defaultProps = {
  backButton: undefined,
  logoButton: undefined,
};

export default Navbar;
