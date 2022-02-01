import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Styles/muiTheme";
import GlobalStyle from "./Styles/global.styles";
import AddWorkoutPage from "./pages/AddWorkout/AddWorkout.page";

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AddWorkoutPage />
      </ThemeProvider>
    </RecoilRoot>
  );
}
