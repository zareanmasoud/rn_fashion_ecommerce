import React from 'react';
import {withNavigation} from 'react-navigation';
import HomeTabbarComponent from 'lib/components/HomeTabbar';
import specs from './specs';

const HomeTabbar = () => {
  return <HomeTabbarComponent buttons={specs.buttons} />;
};

export default withNavigation(HomeTabbar);
