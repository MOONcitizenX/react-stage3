import { describe, expect, it } from 'vitest';
import { MIN_NAME_LENGTH } from './constants';

describe('Constants test', () => {
  it('min name length is equal to "3"', () => {
    expect(MIN_NAME_LENGTH).toStrictEqual(3);
  });
});
