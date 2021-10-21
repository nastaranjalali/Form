import palette from "./palette";
import { createTheme } from "@mui/material/styles";
import { lighten } from "@material-ui/core/styles";

const theme = createTheme({
  palette: palette,
  spacing: 2.5,
  typography: {
    h1: {
      fontSize: 35,
      color: "#000",
      fontFamily: " Nunito, sans-serif",
      fontWeight: 400,
    },
    h2: {
      fontSize: 15,
      color: "#444",
      fontFamily: " Nunito, sans-serif",
      fontWeight: 400,
    },
    h3: {
      fontSize: 15,
      color: lighten("#484848", 0.7),
      fontFamily: " Nunito, sans-serif",
      fontWeight: 400,
    },
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    body1: {},
    body2: {},
    button: {},
  },
});

export default theme;
