import { createTheme } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
export const theme = createTheme({
    palette: {
        primary: {
            main: grey[100]
        },
        secondary: purple
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
});