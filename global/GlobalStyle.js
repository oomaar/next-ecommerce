import { createGlobalStyle } from 'styled-components';

export const theme = {};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  a,
  button {
    text-decoration: none;
    cursor: pointer;
  }

  h1,h2,h3,h4,h5,h6,p {
    padding: 0;
  }
`;