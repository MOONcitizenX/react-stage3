import * as yup from 'yup';
import parse from 'date-fns/parse';

export const schema = yup.object({
  firstName: yup
    .string()
    .test({
      test(val, ctx) {
        if (val && val.length < 3) {
          return ctx.createError({ message: 'First name must be at least 3 characters long' });
        }
        if (val && val.length > 20) {
          return ctx.createError({
            message: 'First name must not be more than 20 characters long',
          });
        }
        if (val && !val[0].match(/[A-Z]/)) {
          return ctx.createError({ message: 'First name must start with an uppercase character' });
        }
        return true;
      },
    })
    .required('First name is required'),
  lastName: yup
    .string()
    .test({
      test(val, ctx) {
        if (val && val.length < 3) {
          return ctx.createError({ message: 'Last name must be at least 3 characters long' });
        }
        if (val && val.length > 20) {
          return ctx.createError({ message: 'Last name must not be more than 20 characters long' });
        }
        if (val && !val[0].match(/[A-Z]/)) {
          return ctx.createError({ message: 'Last name must start with an uppercase character' });
        }
        return true;
      },
    })
    .required('Last name is required'),
  accidentDate: yup
    .date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, 'dd.MM.yyyy', new Date());
      return result;
    })
    .typeError('Please enter a valid date')
    .max(new Date(), "Couldn't have happened in the future")
    .required('123'),
  location: yup
    .string()
    .oneOf(['Earth', 'Mars', 'Venus'] as const)
    .required('Location is required'),
  isAlienContact: yup.boolean().required('This checkbox is required'),
  humanInjuries: yup.string().required('This field is required'),
  evidence: yup.mixed(),
});
export type FormData = yup.InferType<typeof schema>;

export interface FormDataWithId extends FormData {
  id: string;
}
