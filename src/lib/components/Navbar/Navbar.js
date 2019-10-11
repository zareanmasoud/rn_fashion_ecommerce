import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from "./styles";

export const Navbar = props => {
  const {noBackButton, backButton, buttonTwo, logoButton} = props;
  return (
    <View style={styles.container}>
      {[
        renderButtonOne(noBackButton, backButton, logoButton),
        renderButton(buttonTwo)
      ]}
    </View>
  );
};

const renderButton = button => {
  return (
    <TouchableOpacity onPress={() => button.action()}>
      <View style={styles.buttonView}>
        <Image source={button.src} style={styles.buttonImg}/>
      </View>
    </TouchableOpacity>
  )
};

const renderEmptyView = () => {
  return (
    <View style={styles.emptyView}/>
  )
};

const renderButtonOne = (noBackButton, backButton, logoButton) => {
  if (noBackButton) {
    if (logoButton) return renderButton(logoButton);
    else return renderEmptyView();
  } else return renderButton(backButton);
};
