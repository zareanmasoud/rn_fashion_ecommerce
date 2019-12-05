import React from 'react';
import {withNavigation} from 'react-navigation';
// eslint-disable-next-line import/no-extraneous-dependencies
import Tabbar from 'lib/components/HomeTabbar';
import specs from './specs';

// The concrete MainTabbar
const HomeTabbar = () => {
  return <Tabbar specs={specs} />;
};

export default withNavigation(HomeTabbar);
