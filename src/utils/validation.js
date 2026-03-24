import * as yup from "yup";

 export const signupSchema = yup.object({
   name: yup.string().required("Name is required"),

   email: yup
     .string()
     .nullable()
     .email()
     .when("showEmail", (showEmail) => {
       if (showEmail) {
         return yup
           .string()
           .email()
           .matches(
             /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
             "Invalid Email Format"
           )
           .required("Required");
       }
     })
     .required(),

   mobile: yup
     .string()
     .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile")
     .required("Mobile is required"),

   password: yup
     .string()
     .min(6, "Minimum 6 characters")
     .required("Password is required"),
 });
 export const loginSchema = yup.object({
   email: yup
     .string()
     .nullable()
     .email()
     .when("showEmail", (showEmail) => {
       if (showEmail) {
         return yup
           .string()
           .email()
           .matches(
             /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
             "Invalid Email Format"
           )
           .required("Required");
       }
     })
     .required(),

   password: yup
     .string()
     .min(6, "Minimum 6 characters")
     .required("Password is required"),
 });