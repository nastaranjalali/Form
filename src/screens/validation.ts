import * as yup from "yup";
export const schema = yup.object().shape({
  name: yup.string().required("This field is required"),
  persianName: yup.string().required("This field is required"),
  propertyCode: yup.string().required("This field is required"),
  city: yup.string().required("This field is required"),
  resourceType: yup.string().required("This field is required"),
  website: yup
    .string()
    .url("is not an URL address")
    .required("This field is required"),
  description: yup.string().required("This field is required"),
  persianDescription: yup.string().required("This field is required"),
  country: yup.string().required("This field is required"),
  cityAddress: yup.string().required("This field is required"),
  post: yup.string().required("This field is required"),
  address: yup.string().required("This field is required"),
  persianAddress: yup.string().required("This field is required"),
  generalEmail: yup
    .string()
    .email("is not an email address")
    .required("This field is required"),
  bookingEmail: yup
    .string()
    .email("is not an email address")
    .required("This field is required"),
  bookingFailEmail: yup
    .string()
    .email("is not an email address")
    .required("This field is required"),
  generalPhone: yup
    .string()
    .matches(/^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/, "is not a phone number")
    .required("This field is required"),
  bookingFailPhone: yup
    .string()
    .matches(/^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/, "is not a phone number")
    .required("This field is required"),
  generalFax: yup
    .string()
    .matches(
      /^(\+?\d{1,}(\s?|-?)\d*(\s?|-?)\(?\d{2,}\)?(\s?|-?)\d{3,}\s?\d{3,})$/,
      "is not a fax"
    )
    .required("This field is required"),
  confirmationFax: yup
    .string()
    .matches(
      /^(\+?\d{1,}(\s?|-?)\d*(\s?|-?)\(?\d{2,}\)?(\s?|-?)\d{3,}\s?\d{3,})$/,
      "is not a fax"
    )
    .required("This field is required"),
  currencies: yup.string().required("This field is required"),
  bookingTimeOut: yup.string().required("This field is required"),
});
