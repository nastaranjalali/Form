import { Grid } from "@material-ui/core";
import { InputBox } from "../InputBox";
import useStyles from "../../screens/styles";
import { FormikErrors, FormikTouched } from "formik";
import { MyFormValues } from "../../screens/values";
import { FC } from "react";

interface Props {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  errors: FormikErrors<MyFormValues>;
  touched: FormikTouched<MyFormValues>;
  handleBlur: any;
  values: MyFormValues;
}

export const ContactDetails: FC<Props> = ({
  setFieldValue,
  errors,
  touched,
  handleBlur,
  values,
}) => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.inputsContainer}>
      <InputBox
        label={"General Email"}
        placeholder={"Enter the accommodation general email"}
        type={"text"}
        name={"generalEmail"}
        helperText={touched.generalEmail ? errors.generalEmail : ""}
        error={!!errors.generalEmail && touched.generalEmail}
        onBlur={handleBlur}
        value={values.generalEmail}
        onChange={(e) => setFieldValue("generalEmail", e.currentTarget.value)}
      />
      <InputBox
        label={"Booking Email"}
        placeholder={"Enter the accommodation booking email"}
        type={"text"}
        name={"bookingEmail"}
        helperText={touched.bookingEmail ? errors.bookingEmail : ""}
        error={!!errors.bookingEmail && touched.bookingEmail}
        onBlur={handleBlur}
        value={values.bookingEmail}
        onChange={(e) => setFieldValue("bookingEmail", e.currentTarget.value)}
      />
      <InputBox
        label={"Booking Fail Report Email"}
        placeholder={"Enter the accommodation email for booking fail reports"}
        type={"text"}
        name={"bookingFailEmail"}
        helperText={touched.bookingFailEmail ? errors.bookingFailEmail : ""}
        error={!!errors.bookingFailEmail && touched.bookingFailEmail}
        onBlur={handleBlur}
        value={values.bookingFailEmail}
        onChange={(e) =>
          setFieldValue("bookingFailEmail", e.currentTarget.value)
        }
      />
      <InputBox
        label={"General Phone Number"}
        placeholder={"Enter the accommodation general email"}
        type={"text"}
        name={"generalPhone"}
        helperText={touched.generalPhone ? errors.generalPhone : ""}
        error={!!errors.generalPhone && touched.generalPhone}
        onBlur={handleBlur}
        value={values.generalPhone}
        onChange={(e) => setFieldValue("generalPhone", e.currentTarget.value)}
      />
      <InputBox
        label={"Booking Fail Report Phone Number"}
        placeholder={"Enter the accommodation phone number"}
        type={"text"}
        name={"bookingFailPhone"}
        helperText={touched.bookingFailPhone ? errors.bookingFailPhone : ""}
        error={!!errors.bookingFailPhone && touched.bookingFailPhone}
        onBlur={handleBlur}
        value={values.bookingFailPhone}
        onChange={(e) =>
          setFieldValue("bookingFailPhone", e.currentTarget.value)
        }
      />
      <Grid item xs={4} />
      <InputBox
        label={"General Fax Number"}
        placeholder={"Enter the accommodation general Fax Number"}
        type={"text"}
        name={"generalFax"}
        helperText={touched.generalFax ? errors.generalFax : ""}
        error={!!errors.generalFax && touched.generalFax}
        onBlur={handleBlur}
        value={values.generalFax}
        onChange={(e) => setFieldValue("generalFax", e.currentTarget.value)}
      />
      <InputBox
        label={"Booking Confirmation Fax Number"}
        placeholder={"Enter the accommodation booking confirmation fax number"}
        type={"text"}
        name={"confirmationFax"}
        helperText={touched.confirmationFax ? errors.confirmationFax : ""}
        error={!!errors.confirmationFax && touched.confirmationFax}
        onBlur={handleBlur}
        value={values.confirmationFax}
        onChange={(e) =>
          setFieldValue("confirmationFax", e.currentTarget.value)
        }
      />
    </Grid>
  );
};
