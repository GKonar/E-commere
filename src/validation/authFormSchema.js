import * as yup from 'yup';

export const schema = yup.object().shape({
  password: yup.string().required().min(10),
  email: yup.string().email().required(),
});

