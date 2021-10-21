import { Grid } from "@material-ui/core";
import { InputBox } from "../InputBox";
import useStyles from "../../screens/styles";
import { FC } from "react";

interface Props {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

export const PMSDetails: FC<Props> = ({ setFieldValue }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.inputsContainer}>
      <InputBox
        label={"PMS Connected"}
        type={"checkbox"}
        checkboxName={"Accommodation exists in PMS"}
        size={12}
        name={"PMS"}
        onChange={(e) => setFieldValue("PMS", e.currentTarget.checked)}
      />
    </Grid>
  );
};
