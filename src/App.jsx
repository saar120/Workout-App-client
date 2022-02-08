import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Styles/muiTheme";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./Styles/global.styles";
import { ROUTES } from "./constants/routes.constants";
import AuthPage from "./pages/AuthPage/AuthPage";
import DashboardPage from "./pages/Dashboard/Dashboard.page";
import WorkoutPage from "./pages/AddWorkout/WorkoutPage";
import AuthRoute from "./Routes/AuthRoute";
import { CssBaseline } from "@mui/material";

export default function App() {
  return (
    <RecoilRoot>
      <CssBaseline enableColorScheme />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Routes>
            <Route path={ROUTES.HOME} element={<AuthRoute />}>
              <Route path={ROUTES.WORKOUT} element={<WorkoutPage />} />
              <Route path={ROUTES.DASH} element={<DashboardPage />} />
            </Route>
            <Route path={ROUTES.AUTH} element={<AuthPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}
