import { createTheme } from "@mui/material/styles";
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
      main: "rgb(56,145,166)",
    },
    secondary: {
      main: "rgb(219,84,97)",
    },
  },
});

export default THEME;
