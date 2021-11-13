import styled, { createGlobalStyle } from 'styled-components';

export const COLORS = {
  black: '#000000',
  brown: '#603813',
  lightBlue: '#74d7ec',
  pink: '#ffafc7',
  paper: '#fbf9f5',
  red: '#ff0000',
};

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
    background-color: ${COLORS.black};
    color: ${COLORS.lightBlue};
    font-family: sans-serif;
  }
`;

export default GlobalStyles;

export const SectionHeading = styled.h3``;
