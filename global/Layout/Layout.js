import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, theme } from "../GlobalStyle";

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {/* Navbar */}
        {/* Sidebar */}
        {children}
        {/* Footer */}
      </ThemeProvider>
    </ThemeProvider>
  );
};
