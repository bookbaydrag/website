import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`   
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
    /* background-color: #002222; */
    /* color: #FFEECC; */
    /* font-family: 'Fira Code', monospace, sans-serif; */
  }

  body {
    width: 800px;
    margin: auto;
  }

  fieldset {
    border: none;
  }
`;

export default GlobalStyles;
