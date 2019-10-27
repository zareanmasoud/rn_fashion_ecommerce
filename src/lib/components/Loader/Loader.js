import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

type Props = {
  size?: 'small' | 'large',
};

const Loader = ({size}: Props) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={size}/>
    </View>
  );
};

Loader.defaultProps = {
  size: 'small',
};

export default Loader;

