import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import App from './App';

it('renders App', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /home/i,
    })
  ).toBeInTheDocument();
});
