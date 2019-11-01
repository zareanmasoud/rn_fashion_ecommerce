import React from 'react';
import {View} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import Loader from 'lib/components/Loader';
import {withNavigation} from 'react-navigation';
import styles from './styles';
import {HOME_SCREEN} from '../routes/constants';

const InitialScreen = ({navigation}) => {
  // temporarily
  setTimeout(() => navigation.navigate(HOME_SCREEN), 1000);

  return (
    <View style={styles.container}>
      <Loader />
    </View>
  );
};

export default withNavigation(InitialScreen);
