import React from 'react';
import {View} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import Loader from 'lib/components/Loader';
import styles from './styles';
import {HOME_SCREEN} from '../routes/constants';

class InitialScreen extends React.Component {
  constructor(props) {
    super(props);

    // temporarily
    const {navigation} = this.props;
    setTimeout(() => navigation.navigate(HOME_SCREEN), 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Loader />
      </View>
    );
  }
}

export default InitialScreen;
