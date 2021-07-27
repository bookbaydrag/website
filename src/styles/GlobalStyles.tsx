import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    width: 800px;
    margin: auto;
  }
  /* 
  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }

  html, body, #root {
    height: 100%;
    margin: auto;
    box-sizing: border-box;
    position: relative;
    background-color: #001111;
    color: #FFEECC;
    font-family: 'Fira Code', monospace, sans-serif;
  } */
`;

export default GlobalStyles;
