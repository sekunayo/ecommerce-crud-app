import * as yup from "yup";

export const checkoutValidationSchema = yup.object().shape({
  name: yup.string().required("Can't be empty"),
  cardNumber: yup
    .string()
    .required("Can't be empty")
    .matches(/^\d+$/, "Must be only digits")
    .min(16, "Must be exactly 16 digits")
    .max(16, "Must be exactly 16 digits"),
  month: yup
    .string()
    .required("Can't be empty")
    .matches(/^\d+$/, "Must be only digits")
    .min(2, "Must be exactly 2 digits")
    .max(2, "Must be exactly 2 digits"),
  year: yup
    .string()
    .required("Can't be empty")
    .matches(/^\d+$/, "Must be only digits")
    .min(4, "Must be exactly 4 digits")
    .max(4, "Must be exactly 4 digits"),
  cvc: yup
    .string()
    .required("Can't be empty")
    .matches(/^\d+$/, "Must be only digits")
    .min(3, "Must be exactly 3 digits")
    .max(3, "Must be exactly 16 digits"),
});

export const shippingValidationSchema = yup.object().shape({
  firstName: yup.string().required("Can't be empty"),
  lastName: yup.string().required("Can't be empty"),
  companyName: yup.string(),
  address1: yup.string().required("Can't be empty"),
  address2: yup.string(),
  city: yup.string().required("Can't be empty"),
  state: yup.string().required("Can't be empty"),
  emailAddress: yup
    .string()
    .email("Invalid email format")
    .required("Can't be empty"),
  additionalInfo: yup.string(),
  zipCode: yup.string().required(),
  phoneNo: yup
    .string()
    .required("Can't be empty")
    .matches(/^\d+$/, "Must be only digits")
    .min(5, "Must not be less than 5 digits"),
});
