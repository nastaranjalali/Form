import { FC } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { ReactComponent as IranFlag } from "../assets/icons/flag.svg";
import { GridSize } from "@mui/material";
import useStyles from "./stylesForInputBox";

interface Props extends React.HTMLProps<HTMLInputElement> {
  label: string;
  helperText?: string;
  type: string;
  icon?: boolean;
  checkboxName?: string;
  checkBoxSize?: GridSize;
  error?: boolean;
}

export const InputBox: FC<Props> = ({
  label,
  type,
  icon,
  checkboxName,
  checkBoxSize,
  helperText,
  error,
  ...otherProps
}) => {
  const classes = useStyles();
  return (
    <Grid
      item
      md={type === "checkbox" ? checkBoxSize : 4}
      xs={type === "checkbox" ? 12 : 12}
      sm={type === "checkbox" ? checkBoxSize : 6}
      className={classes.root}
    >
      <label htmlFor={label} className={classes.label}>
        <Grid className={classes.labelWrapper}>
          <Typography variant={"h2"}>{label}</Typography>
          {icon ? <IranFlag /> : null}
        </Grid>

        <Grid className={classes.inputWrapper}>
          <input
            {...otherProps}
            type={type}
            id={label}
            className={classes.input}
            style={{ width: type === "checkbox" ? "25px" : "100%" }}
          />
          {type === "checkbox" ? (
            <span className={classes.checkboxName}>{checkboxName}</span>
          ) : null}
        </Grid>
      </label>
      {helperText ? (
        <span
          className={classes.helperText}
          style={{ color: error ? "#D41518" : "#444" }}
        >
          {helperText}
        </span>
      ) : null}{" "}
    </Grid>
  );
};
