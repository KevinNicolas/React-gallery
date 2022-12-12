import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }
  
  body {
    background-color: rgba(15 15 20 / 1);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: white;
  }
`;
