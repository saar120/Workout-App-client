import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants/colors.constants";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    background-color: ${COLORS.light};
    font-family: 'Oxygen', sans-serif;
  }
  a.btnLink {
    color:inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
