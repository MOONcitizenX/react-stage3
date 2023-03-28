import { invalidTestData, validTestData } from 'test/testData';
import { describe, expect, it } from 'vitest';
import { validateDate, validateFile, validateName } from './validators';

describe('Validators tests', () => {
  it('validates valid name', () => {
    expect(validateName(validTestData.firstName)).toStrictEqual(true);
  });
  it('validates invalid name', () => {
    expect(validateName(invalidTestData.firstName)).toStrictEqual(false);
  });
  it('validates no name', () => {
    expect(validateName(undefined)).toStrictEqual(false);
  });

  it('validates valid date', () => {
    expect(validateDate(validTestData.date)).toStrictEqual(true);
  });
  it('validates invalid date', () => {
    expect(validateDate(invalidTestData.date)).toStrictEqual(false);
  });
  it('validates no date', () => {
    expect(validateDate(undefined)).toStrictEqual(false);
  });

  it('validates valid file', () => {
    expect(validateFile(validTestData.file)).toStrictEqual(true);
  });
  it('validates invalid file', () => {
    expect(validateFile(invalidTestData.file)).toStrictEqual(false);
  });
  it('validates no file', () => {
    expect(validateFile(undefined)).toStrictEqual(false);
  });
});
