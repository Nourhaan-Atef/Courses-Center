import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "It is too short you should insert at least 2 characters")
    .max(20, "It is too long you should insert at most 10 characters")
    .required("Required"),
  age: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  grade: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
});

export const TeacherFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "It is too short you should insert at least 2 characters")
    .max(20, "It is too long you should insert at most 10 characters")
    .required("Required"),
  email: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  major: Yup.string().required("Required"),
});
