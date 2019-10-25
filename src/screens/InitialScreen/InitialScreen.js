import React from 'react';
import {View} from 'react-native';
import {Loader} from 'lib/components/Loader';
import styles from './styles';
import {HOME_SCREEN} from '../routes/constants';
// import PropTypes from 'prop-types';

export class InitialScreen extends React.Component {
  constructor(props) {
    super(props);

    // temporarily
    setTimeout(() => this.props.navigation.navigate(HOME_SCREEN), 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Loader />
      </View>
    );
  }
}

// InitialScreen.propTypes = {
//   navigation: PropTypes.object.isRequired
// };
