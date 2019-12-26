import React from 'react';
import Item from 'lib/components/MyFlatList/Item';
import type {Data} from 'lib/components/MyFlatList/Item/model';
import {withNavigation} from 'react-navigation';
import specs from './specs';

type Props = {
  data: Data,
  index: number,
};

const Product = ({data, index, navigation}: Props) => {
  return (
    <Item key={index} index={index} {...specs.product(navigation, data)} />
  );
};

export default withNavigation(Product);
