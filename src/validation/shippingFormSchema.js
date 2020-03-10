import * as yup from 'yup';

export const schema = yup.object().shape({
  // cardSecurityCode: yup.number().required()
  //   .typeError('security code is required')
  //   .test('length', 'security code is not correct', val => val.toString().length === 3),
  // date: yup.string().required(),
  // cardNumber: yup.number().required()
  //   .typeError('card number is required')
  //   .test('length', 'card number is not correct', val => val.toString().length === 18),
  email: yup.string().email().required(),
  number: yup.number().required()
    .typeError('field must be a number')
    .test('length', 'phone number must be more than 6 characters', val => val.toString().length > 7),
  postal: yup.number().required()
    .typeError('field must be a number')
    .test('length', 'postal must be more or equal 4 characters', val => val.toString().length >= 4),
  state: yup.string().required(),
  city: yup.string().required(),
  adresse: yup.string().required(),
  name: yup.string().required(),
});
