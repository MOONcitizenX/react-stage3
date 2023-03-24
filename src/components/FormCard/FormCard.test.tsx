import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import FormCard from './FormCard';

const cardDataTruthy = {
  firstName: 'John',
  lastName: 'Doe',
  date: '2023-11-02',
  location: 'Mars',
  isAlienContact: true,
  humanInjuries: true,
  file: 'https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede.jpg',
};

const truthyText = {
  alienContactText: 'An alien contact',
  injuriesText: 'Resulted in human injuries',
  imageAltText: 'Evidence image',
};

describe('FormCard tests with truthy values', () => {
  beforeEach(() => {
    render(<FormCard {...cardDataTruthy} />);
  });
  it('FormCard renders name', () => {
    const name = cardDataTruthy.firstName + ' ' + cardDataTruthy.lastName;
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it('FormCard renders date', () => {
    expect(screen.getByText(cardDataTruthy.date)).toBeInTheDocument();
  });
  it('FormCard renders location', () => {
    expect(screen.getByText(cardDataTruthy.location)).toBeInTheDocument();
  });
  it('FormCard renders truthy alien contact', () => {
    expect(screen.getByText(truthyText.alienContactText)).toBeInTheDocument();
  });
  it('FormCard renders truthy human injuries', () => {
    expect(screen.getByText(truthyText.injuriesText)).toBeInTheDocument();
  });
  it('FormCard renders image text when image provided', () => {
    const img = screen.getByAltText(truthyText.imageAltText) as HTMLImageElement;
    expect(img.src).toBe(cardDataTruthy.file);
  });
});

const cardDataFalsy = {
  ...cardDataTruthy,
  isAlienContact: false,
  humanInjuries: false,
  file: '',
};

const falsyText = {
  alienContactText: 'Not an alien contact',
  injuriesText: 'No one was injured',
  imageText: 'No evidence provided',
};

describe('FormCard test with falsy values', () => {
  beforeEach(() => {
    render(<FormCard {...cardDataFalsy} />);
  });
  it('FormCard renders falsy alien contact', () => {
    expect(screen.getByText(falsyText.alienContactText)).toBeInTheDocument();
  });
  it('FormCard renders falsy human injuries', () => {
    expect(screen.getByText(falsyText.injuriesText)).toBeInTheDocument();
  });
  it('FormCard renders text if no image provided', () => {
    expect(screen.getByText(falsyText.imageText)).toBeInTheDocument();
  });
});
