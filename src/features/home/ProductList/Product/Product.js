import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Item from 'lib/components/MyFlatList/Item';
// eslint-disable-next-line import/no-extraneous-dependencies
import {PRODUCT_SCREEN} from 'screens/routes/constants';
import type {ItemModel} from 'lib/components/MyFlatList/Item/model';
import {withNavigation} from 'react-navigation';

type Props = {
  index: number,
  data: ItemModel,
};

const Product = ({index, data, navigation}: Props) => {
  const spec = {
    press: () => navigation.navigate(PRODUCT_SCREEN, {id: data.id}),
  };

  return <Item key={index} data={data} spec={spec} />;
};

export default withNavigation(Product);
