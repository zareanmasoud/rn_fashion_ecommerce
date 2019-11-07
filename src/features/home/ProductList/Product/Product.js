import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Item from 'lib/components/MyFlatList/Item';
import type {ItemModel} from 'lib/components/MyFlatList/Item/model';
import {withNavigation} from 'react-navigation';
import specs from './specs';

type Props = {
  index: number,
  data: ItemModel,
};

const Product = ({index, data, navigation}: Props) => {
  return <Item key={index} data={data} spec={specs.spec(navigation, data)} />;
};

export default withNavigation(Product);
