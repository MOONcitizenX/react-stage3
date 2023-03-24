import { MIN_NAME_LENGTH } from 'constants/constants';

export const validateName = (value: string | undefined) => {
  if (!value) return false;
  return value?.length >= MIN_NAME_LENGTH && /^[A-Z]*$/.test(value[0]);
};

export const validateDate = (value: string | undefined) => {
  if (!value) return false;
  const now = new Date(Date.now());
  return new Date(value) < now;
};

export const validateFile = (fileName: string | undefined) => {
  if (fileName) {
    return new RegExp(/\.(jpe?g|png|gif|svg|webp)/i).test(fileName);
  }
};
