import Card from 'components/Card/Card';
import React from 'react';
import products from 'data/products.json';
import s from './HomePage.module.css';
import SearchBar from 'components/SearchBar/SearchBar';

const HomePage = () => {
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
};

export default HomePage;
