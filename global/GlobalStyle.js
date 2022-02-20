import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

// View Ports
export const lgScreen = `1024px`;
export const mdScreen = `678px`;
export const smScreen = `425px`;
export const xsScreen = `320px`;

// Themes
export const theme = {
  HeaderHeight: "3rem",
  typography: {
    bodyFont: `'Poppins', sans-serif`,
    bigFontSize: "2rem",
    h1FontSize: "1.5rem",
    h2FontSize: "1.25rem",
    h3FontSize: "1.12rem",
    normalFontSize: "0.938rem",
    smallFontSize: "0.813rem",
    smallerFontSize: "0.75rem",
    fontWeight: {
      fontMedium: "400",
      fontSemiBold: "700",
    },
  },
  zIndex: {
    zToolTip: "10",
    zFixed: "100",
    zHeader: "200",
    zModel: "1000",
  },
};

// Color Themes
const hueColor = "340";

export const lightTheme = {
  colors: {
    firstColor: `hsl(${hueColor}, 69%, 61%)`,
    titleColor: `hsl(${hueColor}, 8%, 15%)`,
    textColor: `hsl(${hueColor}, 8%, 45%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    bodyColor: `hsl(${hueColor}, 60%, 99%)`,
    scrollBarColor: `hsl(${hueColor}, 12%, 90%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 80%)`,
    hoverColor: `hsl(${hueColor}, 57%, 53%)`,
    cardColor: `hsl(${hueColor},38%,97%)`,
  },
};

export const darkTheme = {
  colors: {
    firstColor: `hsl(${hueColor}, 69%, 61%)`,
    titleColor: `hsl(${hueColor}, 8%, 95%)`,
    textColor: `hsl(${hueColor}, 8%, 75%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    bodyColor: `hsl(${hueColor}, 28%, 13%)`,
    scrollBarColor: `hsl(${hueColor}, 12%, 48%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 36%)`,
    hoverColor: `hsl(${hueColor}, 57%, 53%)`,
    cardColor: `hsl(${hueColor}, 29%, 16%)`,
  },
};

// Reusable Classes
export const Button = styled.a`
  background: ${({ theme }) => theme.colors.firstColor};
  color: #fff;
  padding: 0.7rem 1rem;
  border-radius: 0.4rem;

  :hover {
    ${({ theme }) => theme.colors.hoverColor};
  }

  margin-left: 5rem;
`;

export const Container = styled.div`
  padding: 1rem;
  margin: 1.5rem 0;

  @media screen and (max-width: ${smScreen}) {
    padding: 1rem 0.5rem;
  }
`;

// Global Style
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
    background-color: ${({ theme }) => theme.colors.bodyColor};
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
    border: 0;
    outline: 0;
  }

  h1,h2,h3,h4,h5,h6,p {
    padding: 0;
  }
`;
