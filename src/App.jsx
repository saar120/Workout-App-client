import React from "react";
import { RecoilRoot } from "recoil";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Styles/muiTheme";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./Styles/global.styles";
import { ROUTES } from "./constants/routes.constants";
import AddWorkoutPage from "./pages/AddWorkout/AddWorkout.page";

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />

        <Routes>
          <Route path={`${ROUTES.HOME}`} element={<AddWorkoutPage />} />
        </Routes>
      </ThemeProvider>
    </RecoilRoot>
  );
}
