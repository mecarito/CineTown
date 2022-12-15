import * as yup from 'yup';

export async function validateEmailandPassword(
  email: string,
  password: string
) {
  let schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  });
  return await schema.isValid({ email, password });
}

export async function validateEmail(email: string) {
  let schema = yup.object().shape({
    email: yup.string().required().email(),
  });
  return await schema.isValid({ email });
}

export async function validatePassword(password: string) {
  let schema = yup.object().shape({
    password: yup.string().required().min(8),
  });
  return await schema.isValid({ password });
}
