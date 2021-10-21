import {lighten} from "@material-ui/core/styles";

const palette = {
    primary: {
        main: "#ffffff",
        textContent: "#000",
    },
    secondary: {
        main: "#534bab",
        textContent: lighten("#484848",0.7),
    },
    text: {
        primary: lighten("#484848",0.7),
        secondary: "#000",
    },
};
export default palette;