import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Item from 'lib/components/MyFlatList/Item';
import type {ItemModel} from 'lib/components/MyFlatList/Item/model';

type Props = {
  index: number,
  item: ItemModel,
};

export default function Product({index, item}: Props) {
  return <Item key={index} item={item} />;
}
