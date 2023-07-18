import { createTheme } from "@mui/material";
import { blue, deepPurple, } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: blue,
            // {
            //     main: grey[100]
            // },
        secondary: deepPurple,
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
});