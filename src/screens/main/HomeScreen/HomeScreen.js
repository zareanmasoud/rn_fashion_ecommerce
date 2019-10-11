import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Header} from "lib/components/Header";
// import styles from './styles';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    navigation.setParams({navigation});
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>

      </View>
    );
  };

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      header: <Header navigation={params.navigation} noBackButton/>,
    };
  };
}
