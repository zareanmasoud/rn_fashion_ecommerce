import React from 'react';
import {withNavigation} from 'react-navigation';
import HomeTabbarComponent from 'lib/components/HomeTabbar';
import model from './model';

const HomeTabbar = () => {
  return <HomeTabbarComponent buttons={model.buttons} />;
};

export default withNavigation(HomeTabbar);
