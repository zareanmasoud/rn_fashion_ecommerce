/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import NavigationContainer from 'screens/routes/container';
import {ScreenContentFrame} from 'lib/components/ScreenContentFrame';

const App: () => React$Node = () => {
  return (
    <ScreenContentFrame>
      <NavigationContainer/>
    </ScreenContentFrame>
  );
};

export default App;

