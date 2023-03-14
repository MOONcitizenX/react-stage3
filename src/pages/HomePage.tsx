import Card from '../components/Card';
import React, { Component } from 'react';
import products from '../data/products.json';
import s from './HomePage.module.css';
import SearchBar from '../components/SearchBar';

export default class HomePage extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <div className={s.productsWrapper}>
          {products.map((prod) => (
            <Card key={prod.id} product={prod} />
          ))}
        </div>
      </>
    );
  }
}
