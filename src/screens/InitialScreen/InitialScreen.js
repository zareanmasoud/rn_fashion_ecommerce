import React from 'react';
import {View} from 'react-native';
import {Loader} from '../../components/Loader';
import styles from './styles';
import {HOME_SCREEN} from "../routes/constants";
// import PropTypes from 'prop-types';

export class InitialScreen extends React.Component {
  constructor(props) {
    super(props);

    // temporarily
    this.props.navigation.navigate(HOME_SCREEN);
  }

  render() {
    return (
      <View style={styles.container}>
        <Loader/>
      </View>
    );
  }
}

// InitialScreen.propTypes = {
//   navigation: PropTypes.object.isRequired
// };
