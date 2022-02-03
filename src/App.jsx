import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Styles/muiTheme";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./Styles/global.styles";
import { ROUTES } from "./constants/routes.constants";
import AddWorkoutPage from "./pages/AddWorkout/AddWorkout.page";
import AuthPage from "./pages/AuthPage/AuthPage";

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Router>
          <Routes>
            <Route path={`${ROUTES.HOME}`} element={<AddWorkoutPage />} />
            <Route path={`${ROUTES.AUTH}`} element={<AuthPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}
