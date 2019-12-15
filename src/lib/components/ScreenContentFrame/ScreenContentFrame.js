import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import R from 'res/R';
import styles from './styles';

type Props = {
  children: ?React.Node,
  statusBarStyle?: 'dark-content' | 'light-content',
  statusBackgroundColor?: string,
};

const ScreenContentFrame = ({
  children,
  statusBarStyle,
  statusBackgroundColor,
}: Props) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBackgroundColor}
      />
      {/* <ImageBackground source={R.images.main_background} style={styles.imgBackground}/> // or view with backgroundColor */}
      <ScrollView
        style={styles.scrollView}
        // nestedScrollEnabled
        contentContainerStyle={styles.contentContainer}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

ScreenContentFrame.defaultProps = {
  statusBarStyle: 'dark-content',
  statusBackgroundColor: R.colors.whiteBackground,
};

export default ScreenContentFrame;
