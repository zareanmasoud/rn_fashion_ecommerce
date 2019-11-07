import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import MainTabbar from 'lib/components/MainTabbar';
import {withNavigation} from 'react-navigation';
// eslint-disable-next-line import/no-extraneous-dependencies
import HomeMainTabbarLayout from 'lib/components/HomeMainTabbar';
import specs from './specs';

// The concrete MainTabbar
const HomeMainTabbar = () => {
  function renderHomeMainTabbarLayout() {
    return <HomeMainTabbarLayout specs={specs} />;
  }

  return <MainTabbar layout={renderHomeMainTabbarLayout} />;
};

export default withNavigation(HomeMainTabbar);
