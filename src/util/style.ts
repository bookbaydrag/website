import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
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
    width: 100%;
    box-sizing: border-box;
    position: relative;
    background-color: #001111;
    color: #FFEECC;
    font-family: 'Fira Code', monospace, sans-serif;
  }
`;

export default globalStyle;
