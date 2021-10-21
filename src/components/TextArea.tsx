import { FC, FocusEventHandler } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ReactComponent as IranFlag } from "../assets/icons/flag.svg";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    position: "relative",
    marginBottom: 10,
  },
  label: {
    marginLeft: 7,
    marginBottom: 8,
    display: "flex",
    justifyContent: "space-between",
  },
  input: {
    padding: 7,
    borderRadius: 7,
    borderColor: "rgb(108,108,108)",
    borderWidth: 0.5,
    fontSize: 15,
    color: "#8b8b8b",
    fontFamily: " Nunito, sans-serif",
    fontWeight: 400,
  },
  option: {
    fontSize: 15,
    color: "#444",
    fontFamily: " Nunito, sans-serif",
    fontWeight: 400,
  },
  textarea: {
    resize: "none",
    padding: 7,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: "rgb(195,195,195)",
    "&::placeholder": {
      fontSize: 15,
      color: "rgb(139,139,139)",
      fontFamily: " Nunito, sans-serif",
      fontWeight: 400,
    },
  },
  helperText: {
    marginLeft: 5,
    fontSize: 12,
    fontFamily: " Nunito, sans-serif",
  },
});
interface Props extends React.HTMLProps<HTMLTextAreaElement> {
  label: string;
  helperText?: string;
  icon?: boolean;
  error?: boolean;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
}

export const TextArea: FC<Props> = ({
  label,
  icon,
  error,
  helperText,
  onBlur,
  ...otherProps
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} className={classes.root}>
      <label htmlFor={label} className={classes.label}>
        <Typography variant={"h2"}>{label}</Typography>
        {icon ? <IranFlag /> : null}
      </label>
      <textarea
        {...otherProps}
        id={label}
        rows={8}
        className={classes.textarea}
      ></textarea>
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
