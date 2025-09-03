import * as yup from "yup";

export const step1Schema = yup.object().shape({
  FullName: yup.string().required("Full name is required!"),
  Application: yup.string().required("Application field is required!"),
  Phone: yup.string().required("Phone number is required!"),
  Address: yup.string().required("Address is required!"),
  LinkGitHub: yup.string().required("GitHub link is required!"),
  Email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required!"),
});
export const step2Schema = yup.object().shape({
  Education: yup.string().required("Education is required!"),
  Skill: yup.string().required("Education field is required!"),
});
export const step3Schema = yup.object().shape({
  Background: yup.string().required("Background is required!"),
  Projects: yup.string().required("Projects field is required!"),
});

