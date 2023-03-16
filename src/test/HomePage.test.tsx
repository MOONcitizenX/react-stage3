import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import HomePage from '../pages/HomePage';
import products from '../data/products.json';

describe('CardList tests', () => {
  beforeEach(() => {
    render(<HomePage />);
  });
  it('should render all cards', () => {
    expect(screen.getAllByTestId('individualCard')).toHaveLength(products.length);
  });
});

export class LocalStorageMock {
  store: Record<string, string>;

  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  get length() {
    return Object.keys(this.store).length;
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: unknown) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}

describe('searchBar', () => {
  const user = userEvent.setup();
  const testText = 'test data';

  beforeEach(() => {
    vi.stubGlobal('localStorage', new LocalStorageMock());
    render(<HomePage />);
  });
  afterEach(() => {
    vi.unstubAllGlobals();
  });
  it('writes value to input', async () => {
    const input = screen.getByRole('searchbox');
    await user.type(input, testText);
    expect(input).toHaveValue(testText);
  });
});

describe('rerender', () => {
  const user = userEvent.setup();
  const testText = 'test data';
  const LSKey = 'productSearchValue';

  it('writes value to localStorage on unMount', async () => {
    vi.stubGlobal('localStorage', new LocalStorageMock());
    const { unmount } = render(<HomePage />);
    const input = screen.getByRole('searchbox');
    await user.type(input, testText);
    unmount();
    expect(localStorage.getItem(LSKey)).toBe(testText);
    vi.unstubAllGlobals();
  });
  it('writes value to localStorage on refresh', async () => {
    vi.stubGlobal('localStorage', new LocalStorageMock());
    render(<HomePage />);
    const input = screen.getByRole('searchbox');
    await user.type(input, testText);
    window.dispatchEvent(new Event('beforeunload'));
    expect(localStorage.getItem(LSKey)).toBe(testText);
    vi.unstubAllGlobals();
  });
});

describe('gets data from localStorage', () => {
  const testText = 'test data';
  const LSKey = 'productSearchValue';
  beforeEach(() => {
    vi.stubGlobal('localStorage', new LocalStorageMock());
    localStorage.setItem(LSKey, testText);
    render(<HomePage />);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });
  it('takes value from localStorage', async () => {
    const input = screen.getByRole('searchbox');
    expect(input).toHaveValue(testText);
  });
});
