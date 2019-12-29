import React, {useContext} from 'react';
import Item from 'lib/components/MyFlatList/Item';
import type {Data} from 'lib/components/MyFlatList/Item/types';
import {NavigationContext} from 'react-navigation';
import model from './model';

type Props = {
  data: Data,
  index: number,
};

const Product = ({data, index}: Props) => {
  const navigation = useContext(NavigationContext);
  return (
    <Item key={index} index={index} {...model.product(navigation, data)} />
  );
};

export default Product;
