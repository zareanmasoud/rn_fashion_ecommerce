/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import NavigationContainer from './src/screens/routes/container';
import {ScreenContentFrame} from './src/lib/components/ScreenContentFrame';

const App: () => React$Node = () => {
  return (
    <ScreenContentFrame>
      <NavigationContainer/>
    </ScreenContentFrame>
  );
};

export default App;

