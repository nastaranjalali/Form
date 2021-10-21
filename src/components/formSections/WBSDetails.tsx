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

export const WBSDetails: FC<Props> = ({ setFieldValue }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.inputsContainer}>
      <InputBox
        label={"Override Redirect"}
        type={"checkbox"}
        checkboxName={"Use my own website for WBS instead of my tenant website"}
        size={12}
        name={"WBS"}
        onChange={(e) => setFieldValue("WBS", e.currentTarget.checked)}
      />
    </Grid>
  );
};
