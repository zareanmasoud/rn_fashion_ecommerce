import React from 'react';

type Props = {
  layout: React.Node,
};

// The abstract MainTabbar
const MainTabbar = ({layout}: Props) => {
  const Layout = layout;
  return <Layout />;
};

export default MainTabbar;
