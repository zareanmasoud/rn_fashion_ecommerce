import React, {Component} from 'react';
import {SafeAreaView, ImageBackground, ScrollView, StatusBar} from 'react-native';
import R from "res/R";
import styles from './styles';

export class ScreenContentFrame extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={R.colors.title}/>
        {/* <ImageBackground source={R.images.main_background} style={styles.imgBackground}/> // or view with backgroundColor */}
        <SafeAreaView style={styles.safeAreaView}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {
              this.props.children
            }
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
