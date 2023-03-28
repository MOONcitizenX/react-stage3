import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, beforeEach, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import ReportForm from './ReportForm';
import { getFormInputs, validTestData } from 'test/testData';

const onSubmit = vi.fn();

describe('ReportForm validation works correctly with valid data', () => {
  beforeEach(async () => {
    render(<ReportForm onSubmit={onSubmit} />);
  });
  it('types firstName into input', async () => {
    const { firstNameInput } = getFormInputs();
    await userEvent.type(firstNameInput, validTestData.firstName);
    expect(firstNameInput).toHaveValue(validTestData.firstName);
  });
  it('types lastName into input', async () => {
    const { lastNameInput } = getFormInputs();
    await userEvent.type(lastNameInput, validTestData.lastName);
    expect(lastNameInput).toHaveValue(validTestData.lastName);
  });
  it('types date into input', async () => {
    const { dateInput } = getFormInputs();
    await userEvent.type(dateInput, validTestData.date);
    expect(dateInput).toHaveValue(validTestData.date);
  });
  it('selects location', async () => {
    const { locationInput } = getFormInputs();
    await userEvent.selectOptions(locationInput, validTestData.location);
    expect(locationInput).toHaveValue(validTestData.location);
  });
  it('checks isAlienContact checkbox', async () => {
    const { alienContactInput } = getFormInputs();
    await userEvent.click(alienContactInput);
    expect(alienContactInput).toBeChecked();
  });
  it('selects Yes radio into input', async () => {
    const { humanInjuriesYesInput } = getFormInputs();
    await userEvent.click(humanInjuriesYesInput);
    expect(humanInjuriesYesInput).toBeChecked();
  });
  it('selects No radio into input', async () => {
    const { humanInjuriesYNoInput, humanInjuriesYesInput } = getFormInputs();
    await userEvent.click(humanInjuriesYesInput);
    await userEvent.click(humanInjuriesYNoInput);
    expect(humanInjuriesYNoInput).toBeChecked();
  });
  it('checks isAlienContact checkbox', async () => {
    const { fileInput } = getFormInputs();
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    await userEvent.upload(fileInput, file);
    expect(fileInput.files?.item(0)).toStrictEqual(file);
    expect(fileInput.files).toHaveLength(1);
  });
});
