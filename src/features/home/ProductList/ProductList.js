import React, {useState, useEffect} from 'react';
import MyFlatList from 'lib/components/MyFlatList';
import Product from './Product';
import data from './data';
// import styles from './styles';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data.products);
  }, []);

  return <MyFlatList data={products} itemComponent={Product} />;
}
