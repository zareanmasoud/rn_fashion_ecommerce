import React, {Component} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ItemList from 'lib/components/ItemList';
// eslint-disable-next-line import/no-extraneous-dependencies
import R from 'res/R';
// import styles from './styles';

class Products extends Component {
  getItems = () => {
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
  };

  render() {
    return <ItemList data={this.getItems()} />;
  }
}

export default Products;
