import { Grid } from "@material-ui/core";
import { InputBox } from "../InputBox";
import useStyles from "../../screens/styles";
import { FormikErrors, FormikTouched } from "formik";
import { MyFormValues } from "../../screens/values";
import { FC } from "react";
import { Selector } from "../Selector";

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

export const InventoryAndBooking: FC<Props> = ({
  setFieldValue,
  errors,
  touched,
  handleBlur,
  values,
}) => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.inputsContainer}>
      <Selector
        label={"Currencies"}
        options={["toman:))))))))", "euro", "Tokyo"]}
        name={"currencies"}
        helperText={touched.currencies ? errors.currencies : ""}
        error={!!errors.currencies && touched.currencies}
        onBlur={handleBlur}
        onChange={(e) => setFieldValue("currencies", e.currentTarget.value)}
      />
      <InputBox
        label={"Booking timeout"}
        placeholder={"Example : 5"}
        type={"text"}
        name={"bookingTimeOut"}
        helperText={touched.bookingTimeOut ? errors.bookingTimeOut : ""}
        error={!!errors.bookingTimeOut && touched.bookingTimeOut}
        onBlur={handleBlur}
        value={values.bookingTimeOut}
        onChange={(e) => setFieldValue("bookingTimeOut", e.currentTarget.value)}
      />
      <InputBox
        label={"Accept Full Export"}
        type={"checkbox"}
        checkboxName={"Accept full export for this accommadation"}
        size={4}
        name={"acceptFullExport"}
        onChange={(e) =>
          setFieldValue("acceptFullExport", e.currentTarget.checked)
        }
      />
      <InputBox
        label={"Manual ARR"}
        type={"checkbox"}
        checkboxName={"...................."}
        size={12}
        name={"manualARR"}
        onChange={(e) => setFieldValue("manualARR", e.currentTarget.checked)}
      />
    </Grid>
  );
};
