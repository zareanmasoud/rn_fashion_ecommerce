/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import NavigationContainer from 'screens/routes/container';
// eslint-disable-next-line import/no-extraneous-dependencies
import ScreenContentFrame from 'lib/components/ScreenContentFrame';

const App = () => {
  return (
    <ScreenContentFrame>
      <NavigationContainer />
    </ScreenContentFrame>
  );
};

export default App;
