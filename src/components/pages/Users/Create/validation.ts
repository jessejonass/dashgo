import * as yup from "yup";

export const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email(),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Mínimo de 6 caracteres"),
  passwordConfirmation: yup.string().oneOf([
    null, yup.ref('password'),
  ], 'As senhas precisam ser iguais'),
});
