import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import Card, { Person } from './Card';

const mockPerson: Person = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  species: [],
  url: 'https://swapi.dev/api/people/1/',
};

it('renders Card', () => {
  render(<Card person={mockPerson} />);
  expect(screen.getByRole('heading')).toHaveTextContent(mockPerson.name);
});
