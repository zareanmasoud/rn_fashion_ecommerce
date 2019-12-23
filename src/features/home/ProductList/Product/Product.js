import React from 'react';
import Item from 'lib/components/MyFlatList/Item';
import type {ItemModel} from 'lib/components/MyFlatList/Item/model';
import {withNavigation} from 'react-navigation';
import specs from './specs';

type Props = {
  data: ItemModel,
  index: number,
};

const Product = ({data, index, navigation}: Props) => {
  return (
    <Item
      key={index}
      data={data}
      index={index}
      spec={specs.spec(navigation, data)}
    />
  );
};

export default withNavigation(Product);
