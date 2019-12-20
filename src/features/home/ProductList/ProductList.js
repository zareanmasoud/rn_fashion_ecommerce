import React from 'react';
import MyFlatList from 'lib/components/MyFlatList';
import Product from './Product';
import data from './data';
// import styles from './styles';

export default function ProductList() {
  return <MyFlatList data={data.products} itemComponent={Product} />;
}
