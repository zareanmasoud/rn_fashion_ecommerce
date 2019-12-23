import React from 'react';
import {View} from 'react-native';
import NavbarButton from '../NavbarButton';
import styles from '../styles';
import type {Button} from '../model';

type Props = {
  backButton: Button,
  logoButton: Button,
};

export default function ButtonOne({backButton, logoButton}: Props) {
  if (backButton === undefined) {
    if (logoButton) return <NavbarButton spec={logoButton} />;
    return <View style={styles.emptyView} />;
  }
  return <NavbarButton spec={backButton} />;
}
