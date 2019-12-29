import React from 'react';
import {View} from 'react-native';
import Loader from 'lib/components/Loader';
import styles from './styles';
import {HOME_SCREEN} from '../routes/constants';
import useNavigationContext from '../../context/UseNavigationContext';

const InitialScreen = () => {
  const navigation = useNavigationContext();
  // temporarily
  setTimeout(() => navigation.navigate(HOME_SCREEN), 1000);

  return (
    <View style={styles.container}>
      <Loader />
    </View>
  );
};

export default InitialScreen;
