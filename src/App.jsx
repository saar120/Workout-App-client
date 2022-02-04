import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Styles/muiTheme";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./Styles/global.styles";
import { ROUTES } from "./constants/routes.constants";
import HomePage from "./pages/HomePage/Home.page";
import AddWorkoutPage from "./pages/AddWorkout/AddWorkout.page";
import AuthPage from "./pages/AuthPage/AuthPage";
import DashboardPage from "./pages/Dashboard/Dashboard.page";

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Routes>
            <Route path={`${ROUTES.HOME}`} element={<HomePage />} />
            <Route path={`${ROUTES.WORKOUT}`} element={<AddWorkoutPage />} />
            <Route path={`${ROUTES.DASH}`} element={<DashboardPage />} />
            <Route path={`${ROUTES.AUTH}`} element={<AuthPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}
