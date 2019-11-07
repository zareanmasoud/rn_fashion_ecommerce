import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import MainTabbar from 'lib/components/MainTabbar';
import {withNavigation} from 'react-navigation';
// eslint-disable-next-line import/no-extraneous-dependencies
import ProductMainTabbarLayout from 'lib/components/ProductMainTabbar';
import specs from './specs';

// The concrete MainTabbar
const ProductMainTabbar = () => {
  function renderProductMainTabbarLayout() {
    return <ProductMainTabbarLayout specs={specs} />;
  }

  return <MainTabbar layout={renderProductMainTabbarLayout} />;
};

export default withNavigation(ProductMainTabbar);
