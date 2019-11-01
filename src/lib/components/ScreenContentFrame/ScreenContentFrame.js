import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import R from 'res/R';
import styles from './styles';

type Props = {
  children: ?React.Node,
};

const ScreenContentFrame = ({children}: Props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={R.colors.title} />
      {/* <ImageBackground source={R.images.main_background} style={styles.imgBackground}/> // or view with backgroundColor */}
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {children}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ScreenContentFrame;
