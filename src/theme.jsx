import { createTheme } from "@mui/material";
import { blue, grey, purple } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: purple,
            // {
            //     main: grey[100]
            // },
        secondary: blue
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
});