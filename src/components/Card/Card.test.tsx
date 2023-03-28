import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import Card from 'components/Card/Card';

const product = {
  id: 1,
  title: 'Батончик с протеином «Мята» Bite',
  description:
    'Bite Мята — натуральный орехово-фруктовый батончик без сахара. В составе отборные орехи, фрукты, ягоды и много протеина. Для оригинального вкуса мы добавили ароматную мяту — в сочетании с абрикосом и миндалем получился насыщенный протеиновый снек, который удобно взять с собой и забыть о голоде на несколько часов!  Абсолютно натуральный. Без сахара, без глютена. Не содержит ГМО, молоко и сою. Подходит для диабетиков.',
  price: 4.09,
  stock: 21,
  brand: 'Bite',
  category: 'Полезные сладости',
  catPath: 'sweets',
  type: 'батончик',
  preview:
    'https://raw.githubusercontent.com/mkoroleva5/online-store-content/main/media/small/1.webp',
  images: [
    'https://raw.githubusercontent.com/mkoroleva5/online-store-content/main/media/full/1.webp',
    'https://raw.githubusercontent.com/mkoroleva5/online-store-content/main/media/artistic/1-and-6.webp',
  ],
};
const productNoImage = {
  ...product,
  preview: '',
  images: [],
};

describe('Single Card tests', () => {
  beforeEach(() => {
    render(<Card product={product} />);
  });
  it('has title', () => {
    expect(screen.getByText('Батончик с протеином «Мята» Bite')).toBeInTheDocument();
  });
  it('has price', () => {
    expect(screen.getByText(/4.09/)).toBeInTheDocument();
  });
  it('has stock', () => {
    expect(screen.getByText(/21/)).toBeInTheDocument();
  });
  it('has img src', () => {
    const image = screen.getAllByRole('img');
    expect(image[0]).toHaveAttribute('src');
  });
  it('has correct img src', () => {
    const image = screen.getAllByRole('img') as HTMLImageElement[];
    expect(image[0]?.src).toBe(product.preview);
  });
});

describe('No image provided Card', () => {
  beforeEach(() => {
    render(<Card product={productNoImage} />);
  });
  it('shows placeholder for preview', () => {
    const image = screen.getAllByRole('img') as HTMLImageElement[];
    expect(image[0]?.src).toBe('http://localhost:3000/src/assets/images/default.jpg');
  });
  it('shows placeholder for main image', () => {
    const image = screen.getAllByRole('img') as HTMLImageElement[];
    expect(image[1]?.src).toBe('http://localhost:3000/src/assets/images/default.jpg');
  });
});
