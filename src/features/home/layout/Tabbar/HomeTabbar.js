import React from 'react';
import HomeTabbarComponent from 'lib/components/HomeTabbar';
import model from './model';

const HomeTabbar = () => {
  return <HomeTabbarComponent buttons={model.buttons} />;
};

export default HomeTabbar;
