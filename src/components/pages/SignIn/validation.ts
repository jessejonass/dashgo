import * as yup from 'yup';

export const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email(),
  password: yup.string().required('Senha obrigatória'),
});