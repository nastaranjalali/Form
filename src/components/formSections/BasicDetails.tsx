import { Grid } from "@material-ui/core";
import { InputBox } from "../InputBox";
import useStyles from "../../screens/styles";
import { Stars } from "../Stars";
import { FormikErrors, FormikTouched } from "formik";
import { Selector } from "../Selector";
import { TextArea } from "../TextArea";
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
export const BasicDetails: FC<Props> = ({
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
        label={"Name"}
        placeholder={"Enter accommodation name"}
        type={"text"}
        name={"name"}
        helperText={touched.name ? errors.name : ""}
        error={!!errors.name && touched.name}
        onBlur={handleBlur}
        value={values.name}
        onChange={(e) => setFieldValue("name", e.currentTarget.value)}
      />
      <InputBox
        label={"Persian Name"}
        placeholder={"Enter accommodation name in persian"}
        type={"text"}
        name={"persianName"}
        helperText={touched.persianName ? errors.persianName : ""}
        error={!!errors.persianName && touched.persianName}
        onBlur={handleBlur}
        value={values.persianName}
        onChange={(e) => setFieldValue("persianName", e.currentTarget.value)}
        icon
      />
      <InputBox
        label={"Property Code"}
        placeholder={"Choose a property code for accommodation"}
        type={"text"}
        name={"propertyCode"}
        helperText={touched.propertyCode ? errors.propertyCode : ""}
        error={!!errors.propertyCode && touched.propertyCode}
        onBlur={handleBlur}
        value={values.propertyCode}
        onChange={(e) => setFieldValue("propertyCode", e.currentTarget.value)}
      />
      <Selector
        label={"City"}
        options={["Tehran", "London", "Tokyo"]}
        name={"city"}
        helperText={touched.city ? errors.city : ""}
        error={!!errors.city && touched.city}
        onBlur={handleBlur}
        value={values.city}
        onChange={(e) => setFieldValue("city", e.currentTarget.value)}
      />
      <Selector
        label={"Resource Type"}
        options={[" ", "London", "Tokyo"]}
        name={"resourceType"}
        helperText={touched.resourceType ? errors.resourceType : ""}
        error={!!errors.resourceType && touched.resourceType}
        onBlur={handleBlur}
        onChange={(e) => setFieldValue("resourceType", e.currentTarget.value)}
      />
      <InputBox
        label={"Website"}
        placeholder={"Enter the accommodation Website"}
        type={"text"}
        name={"website"}
        helperText={touched.website ? errors.website : ""}
        error={!!errors.website && touched.website}
        onBlur={handleBlur}
        value={values.website}
        onChange={(e) => setFieldValue("website", e.currentTarget.value)}
      />
      <TextArea
        label={"Description"}
        placeholder={"Enter the accommodation Description"}
        name={"description"}
        helperText={touched.description ? errors.description : ""}
        error={!!errors.description && touched.description}
        onBlur={handleBlur}
        value={values.description}
        onChange={(e) => setFieldValue("description", e.currentTarget.value)}
      />
      <TextArea
        label={"Persian Description"}
        placeholder={"Enter the accommodation Persian Description"}
        name={"persianDescription"}
        helperText={touched.persianDescription ? errors.persianDescription : ""}
        error={!!errors.persianDescription && touched.persianDescription}
        onBlur={handleBlur}
        value={values.persianDescription}
        onChange={(e) =>
          setFieldValue("persianDescription", e.currentTarget.value)
        }
        icon
      />
      <Stars label={"Star Class"} numberOfStars={3} />
    </Grid>
  );
};
