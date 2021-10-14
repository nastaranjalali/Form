import palette from "./palette";
import {createTheme} from '@mui/material/styles'

const theme = createTheme(
    {
        palette: palette,
        spacing: 2.5,
        typography: {
            h1: {
                fontSize:30,
                color:palette.primary,
            },
            h2: {

            },
            h3: {

            }, h4: {

            }, h5: {

            },
            h6: {

            },
            subtitle1: {

            },
            body1: {


            },
            body2: {

            },
            button:{

            }
        }
    }
)


export default theme
