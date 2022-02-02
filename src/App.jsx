import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import AppRouter from "./Routes/AppRoutes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Styles/muiTheme";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./Styles/global.styles";

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Router>
          <Routes>{AppRouter}</Routes>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}
