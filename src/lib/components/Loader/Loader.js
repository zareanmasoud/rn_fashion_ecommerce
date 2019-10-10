import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';
// import PropTypes from 'prop-types';

export const Loader = props => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={props.size}/>
    </View>
  );
};

Loader.defaultProps = {
  size: 'small'
};

// Loader.propTypes = {
//   size: PropTypes.oneOf(['small', 'large'])
// };

