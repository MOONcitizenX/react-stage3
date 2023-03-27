import React from 'react';
import s from './Card.module.css';
import { Product } from 'data/products';
import noImage from 'assets/images/default.jpg';

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  return (
    <div className={s.cardWrapperTable} data-testid={'individualCard'}>
      <img src={product.preview || noImage} alt={product.title} className={s.img} />
      <img src={product.images[1] || noImage} alt={product.title} className={s.secondImg} />
      <div className={s.cardInfo}>
        <h3 className={s.title}>{product.title}</h3>
        <p className={s.stock}>В наличии: {product.stock}</p>
        <p className={s.price}>{product.price.toFixed(2)} BYN</p>
      </div>
    </div>
  );
};

export default Card;
