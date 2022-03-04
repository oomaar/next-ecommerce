import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

// Global Transition
export const transition = `all 0.5s ease-in-out`;

// Sidebar Width
export const SidebarWidth = `500px`;

// Box Shadow
const shadowLight = `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`;
const shadowDark = `0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1)`;

// View Ports
export const lgScreen = `1024px`;
export const mdScreen = `768px`;
export const smScreen = `425px`;
export const xsScreen = `320px`;

// Themes
export const theme = {
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
    zSidebar: "300",
    zModel: "1000",
    zLoading: "1500",
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
    bodyColor: `hsl(${hueColor}, 50%, 89%)`,
    scrollBarColor: `hsl(${hueColor}, 12%, 90%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 80%)`,
    hoverColor: `hsl(${hueColor}, 57%, 53%)`,
    cardColor: `hsl(${hueColor}, 8%, 77%)`,
    navBorder: `hsl(${hueColor}, 0%, 94%)`,
    shadowColor: `${shadowLight}`,
  },
};

export const darkTheme = {
  colors: {
    firstColor: `hsl(${hueColor}, 69%, 61%)`,
    titleColor: `hsl(${hueColor}, 8%, 95%)`,
    textColor: `hsl(${hueColor}, 8%, 75%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    bodyColor: `hsl(${hueColor}, 8%, 10%)`,
    scrollBarColor: `hsl(${hueColor}, 12%, 48%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 36%)`,
    hoverColor: `hsl(${hueColor}, 57%, 53%)`,
    cardColor: `hsl(${hueColor}, 1%, 16%)`,
    navBorder: `hsl(${hueColor}, 38%, 97%)`,
    shadowColor: `${shadowDark}`,
  },
};

// Reusable Classes
export const Button = styled.button`
  border-radius: 0.4rem;
  font-size: ${({ link }) => link && "1.1rem"};
  color: ${({ link, theme }) => (link ? theme.colors.titleColor : "#fff")};
  padding: ${({ link }) => (link ? "0" : "0.7rem 1rem")};
  margin: ${({ sidebarLink }) => sidebarLink && "0 0.5rem"};
  background: ${({ theme, link }) =>
    link ? "transparent" : theme.colors.firstColor};
  transition: ${transition};

  :hover {
    background: ${({ theme, link }) =>
      link ? "transparent" : theme.colors.hoverColor};
    text-decoration: ${({ link }) => link && "underline"};
  }
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
    transition: ${transition};
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

  // ==================== SCROLL-BAR  ====================
  ::-webkit-scrollbar {
    width: 0.6rem;
    background-color: ${({ theme }) => theme.colors.scrollBarColor};
    border-radius: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollThumbColor};
    border-radius: 0.5rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.textColorLight};
  }
`;
