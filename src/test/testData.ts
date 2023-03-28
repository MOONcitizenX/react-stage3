import { screen } from '@testing-library/react';

export const validTestData = {
  firstName: 'John',
  lastName: 'Doe',
  date: '2022-11-02',
  location: 'Earth',
  isAlienContact: true,
  humanInjuries: true,
  file: 'https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/07/SolarFull_SeanDoran_2880FullwidthLede.jpg',
};

export const invalidTestData = {
  firstName: 'ab',
  lastName: 'ce',
  date: '2025-11-02',
  location: '',
  isAlienContact: true,
  humanInjuries: true,
  file: '',
};

export const getFormInputs = () => {
  const firstNameInput = screen.getByRole('textbox', { name: /first name:/i });
  const lastNameInput = screen.getByRole('textbox', { name: /last name:/i });
  const dateInput = screen.getByLabelText(/happened at:/i);
  const locationInput = screen.getByRole('combobox', {
    name: /accident location:/i,
  });
  const alienContactInput = screen.getByRole('checkbox');
  const humanInjuriesYesInput = screen.getByRole('radio', {
    name: /yes/i,
  });
  const humanInjuriesYNoInput = screen.getByRole('radio', {
    name: /no/i,
  });
  const fileInput = screen.getByTestId('file-input') as HTMLInputElement;
  const submitBtn = screen.getByRole('button', {
    name: /submit/i,
  });
  return {
    firstNameInput,
    lastNameInput,
    dateInput,
    locationInput,
    alienContactInput,
    humanInjuriesYesInput,
    humanInjuriesYNoInput,
    fileInput,
    submitBtn,
  };
};
