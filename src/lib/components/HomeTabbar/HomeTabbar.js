import React from 'react';
import {View} from 'react-native';
import TabbarButton from 'lib/components/TabbarButton';
import styles from './styles';
import type {Buttons} from './model';

type Props = {
  buttons: Buttons[],
};

const HomeTabbar = ({buttons}: Props) => {
  const TabbarButtons = Object.values(buttons).map(button => (
    <TabbarButton {...button} key={button.id} />
  ));

  return <View style={styles.container}>{TabbarButtons}</View>;
};

export default HomeTabbar;
