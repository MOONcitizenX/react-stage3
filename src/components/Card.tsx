import React, { Component } from 'react';
import s from './Card.module.css';
import noImage from '../assets/images/default.jpg';
import { Product } from 'data/products';

interface CardProps {
  product: Product;
}

export default class Card extends Component<CardProps> {
  render() {
    return (
      <div className={s.cardWrapperTable} data-testid={'individualCard'}>
        <img
          src={this.props.product.preview || noImage}
          alt={this.props.product.title}
          className={s.img}
        />
        <img
          src={this.props.product.images[1] || noImage}
          alt={this.props.product.title}
          className={s.secondImg}
        />
        <div className={s.cardInfo}>
          <h3 className={s.title}>{this.props.product.title}</h3>
          <p className={s.stock}>В наличии: {this.props.product.stock}</p>
          <p className={s.price}>{this.props.product.price.toFixed(2)} BYN</p>
        </div>
      </div>
    );
  }
}
