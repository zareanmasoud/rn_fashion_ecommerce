import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import MainTabbar from 'lib/components/MainTabbar';
import {withNavigation} from 'react-navigation';
import Layout from './Layout';
import specs from './specs';

// The concrete MainTabbar
const HomeMainTabbar = () => {
  function TheLayout() {
    return <Layout specs={specs} />;
  }

  return <MainTabbar layout={TheLayout} />;
};

export default withNavigation(HomeMainTabbar);
