import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "120px",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    position: "relative",
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    padding: "0 30px",
    marginTop: 20,
  },
  mainIcon: {
    fontSize: 40,
    color: "#000",
  },
  wraper: {
    padding: "0 30px",
  },
  inputsContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "20px 0",
    position: "relative",
    "&::before": {
      content: "''",
      width: "100%",
      height: "2px",
      backgroundColor: "#888",
      position: "absolute",
      top: 0,
      left: 0,
    },
  },
  submitBTN: {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: 15,
    fontFamily: " Nunito, sans-serif",
    fontWeight: 400,
    padding: 15,
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
}));

export default useStyles;
