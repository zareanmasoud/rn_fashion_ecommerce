import React from 'react';
import {View} from 'react-native';
import NavbarButton from '../NavbarButton';
import styles from '../styles';
import type {Button} from '../types';

type Props = {
  backButton: Button,
  logoButton: Button,
};

export default function ButtonOne({backButton, logoButton}: Props) {
  if (backButton === undefined) {
    if (logoButton) return <NavbarButton {...logoButton} logoMode />;
    return <View style={styles.emptyView} />;
  }
  return <NavbarButton {...backButton} />;
}
