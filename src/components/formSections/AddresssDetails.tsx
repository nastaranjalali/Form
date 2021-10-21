import { Grid } from "@material-ui/core";
import { InputBox } from "../InputBox";
import useStyles from "../../screens/styles";
import { FormikErrors, FormikTouched } from "formik";
import { Selector } from "../Selector";
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

export const AddressDetails: FC<Props> = ({
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
        label={"Country"}
        options={["Tehran", "London", "Tokyo"]}
        name={"country"}
        helperText={touched.country ? errors.country : ""}
        error={!!errors.country && touched.country}
        onBlur={handleBlur}
        onChange={(e) => setFieldValue("country", e.currentTarget.value)}
      />
      <Selector
        label={"City"}
        options={["Tehran", "London", "Tokyo"]}
        name={"cityAddress"}
        helperText={touched.cityAddress ? errors.cityAddress : ""}
        error={!!errors.cityAddress && touched.cityAddress}
        onBlur={handleBlur}
        onChange={(e) => setFieldValue("cityAddress", e.currentTarget.value)}
      />
      <InputBox
        label={"Zip/Postal Code"}
        placeholder={"Enter the accommodation Zip/Postal Code"}
        type={"text"}
        name={"post"}
        helperText={touched.post ? errors.post : ""}
        error={!!errors.post && touched.post}
        onBlur={handleBlur}
        value={values.post}
        onChange={(e) => setFieldValue("post", e.currentTarget.value)}
      />
      <InputBox
        label={"Address"}
        placeholder={"Enter the accommodation full address"}
        type={"text"}
        name={"address"}
        helperText={touched.address ? errors.address : ""}
        error={!!errors.address && touched.address}
        onBlur={handleBlur}
        value={values.address}
        onChange={(e) => setFieldValue("address", e.currentTarget.value)}
      />
      <InputBox
        label={"Persian Address"}
        placeholder={"Enter the accommodation full address in persian"}
        type={"text"}
        name={"persianAddress"}
        helperText={touched.persianAddress ? errors.persianAddress : ""}
        error={!!errors.persianAddress && touched.persianAddress}
        onBlur={handleBlur}
        value={values.persianAddress}
        onChange={(e) => setFieldValue("persianAddress", e.currentTarget.value)}
        icon
      />
    </Grid>
  );
};
