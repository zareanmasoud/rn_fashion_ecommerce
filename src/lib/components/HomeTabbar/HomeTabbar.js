import React from 'react';
import {View} from 'react-native';
import TabbarButton from 'lib/components/TabbarButton';
import styles from './styles';
import type {Button} from './model';

type Props = {
  specs: Button[],
};

const HomeTabbar = ({specs}: Props) => {
  const Buttons = Object.values(specs).map(buttonSpecs => (
    <TabbarButton specs={buttonSpecs} key={buttonSpecs.id} />
  ));

  return <View style={styles.container}>{Buttons}</View>;
};

export default HomeTabbar;
