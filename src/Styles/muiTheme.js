import { createTheme } from "@mui/material/styles";
import { COLORS } from "../constants/colors.constants";
const THEME = createTheme({
  typography: {
    fontFamily: `"Oxygen", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
  },
});

export default THEME;
