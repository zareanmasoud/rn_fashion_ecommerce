import React from 'react';
import {View} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import TabbarButton from 'lib/components/TabbarButton';
import styles from './styles';
import type {Button} from './model';

function renderButton(specs, index) {
  return <TabbarButton specs={specs} key={index} />;
}

type Props = {
  specs: Button[],
};

const HomeMainTabbarLayout = ({specs}: Props) => {
  return (
    <View style={styles.container}>
      {Object.values(specs).map((buttonSpecs, index) =>
        renderButton(buttonSpecs, index),
      )}
    </View>
  );
};

export default HomeMainTabbarLayout;
