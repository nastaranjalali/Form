import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    position: "relative",
    marginBottom: 10,
  },
  label: {
    width: "100%",
  },
  input: {
    padding: 7,
    borderRadius: 7,
    borderColor: "rgb(195,195,195)",
    boxShadow: "none",
    backgroundColor: "transparent",
    borderWidth: 0.5,
    height: 38,
    borderStyle: "solid",
    "&::placeholder": {
      fontSize: 15,
      color: "rgb(139,139,139)",
      fontFamily: " Nunito, sans-serif",
      fontWeight: 400,
    },
  },
  labelWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 7,
    marginBottom: 8,
  },
  inputWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  checkboxName: {
    marginLeft: 5,
    fontSize: 12,
    color: "#444",
    fontFamily: " Nunito, sans-serif",
    fontWeight: 700,
  },
  helperText: {
    marginLeft: 5,
    fontSize: 12,
    fontFamily: " Nunito, sans-serif",
  },
}));

export default useStyles;
