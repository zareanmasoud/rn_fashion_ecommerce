import React, { Component } from 'react';
import {MainHeader} from 'features/layout/MainHeader';
import {Products} from "features/home/Products";
// import styles from './styles';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    navigation.setParams({navigation});
  }

  render() {
    const {navigation} = this.props;
    return (
      <Products navigation={navigation}/>
    );
  };

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      header: <MainHeader navigation={params.navigation} noBackButton/>,
    };
  };
}
