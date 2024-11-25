import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  username: yup.string().required("Username field is mandatory."),
  password: yup.string().required("Password field is mandatory."),
});
