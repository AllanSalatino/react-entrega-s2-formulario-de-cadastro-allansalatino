import * as yup from "yup";

export const Schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Porfavor, digite um email valido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        "Senha precisa ter pelo menos um numero, uma letra maiuscula e minuscula"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")]),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.number().required("Contato obrigatório"),
    course_module: yup.string().required("Selecionar módulo obrigatório"),
  });