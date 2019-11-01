import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import MyFlatList from 'lib/components/MyFlatList';
// eslint-disable-next-line import/no-extraneous-dependencies
import R from 'res/R';
import Product from './Product';
// import styles from './styles';

export default function ProductList() {
  function getData() {
    return [
      {
        id: '1',
        title: 'Title',
        description: 'Description',
        discount_code: 'X9E2AD',
        photo: R.images.product1,
      },
      {
        id: '2',
        title: 'Title',
        description: 'Description',
        discount_code: 'X9E2AD',
        photo: R.images.product2,
      },
    ];
  }

  return <MyFlatList data={getData()} itemComponent={Product} />;
}
