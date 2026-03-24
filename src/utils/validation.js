import * as yup from "yup";

 export const signupSchema = yup.object({
   name: yup.string().required("Name is required"),

   email: yup
   .string()
   .email()
   .required("Required"),

   mobile: yup
     .string()
     .required("Mobile is required"),

   password: yup
     .string()
     .min(6, "Minimum 6 characters")
     .required("Password is required"),
 });
 export const loginSchema = yup.object({
   email: yup
   .string()
   .email()
   .required("Required"),

   password: yup
     .string()
     .min(6, "Minimum 6 characters")
     .required("Password is required"),
 });