import React from 'react';
import Item from 'lib/components/MyFlatList/Item';
import type {Data} from 'lib/components/MyFlatList/Item/types';
import {withNavigation} from 'react-navigation';
import model from './model';

type Props = {
  data: Data,
  index: number,
};

const Product = ({data, index, navigation}: Props) => {
  return (
    <Item key={index} index={index} {...model.product(navigation, data)} />
  );
};

export default withNavigation(Product);
