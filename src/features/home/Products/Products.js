import React, { Component } from 'react';
import {ItemList} from "lib/components/ItemList";
import R from "res/R";
// import styles from './styles';

export class Products extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ItemList
        data={this.getItems()}
        navigation={navigation}
      />
    );
  };

  getItems = () => {
    return [
      {
        'id': '1',
        'title': 'Title',
        'description': 'Description',
        'discount_code': 'X9E2AD',
        'photo': R.images.product_1,
      },
      {
        'id': '2',
        'title': 'Title',
        'description': 'Description',
        'discount_code': 'X9E2AD',
        'photo': R.images.product_2,
      },
    ];
  }
}
