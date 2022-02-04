import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    background-color: #E9EDED;
    font-family: 'Oxygen', sans-serif;
  }
  a.btnLink {
    color:inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
