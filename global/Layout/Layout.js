import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Navbar } from "../../components/Navbar/Navbar";
import { darkTheme, GlobalStyle, lightTheme, theme } from "../GlobalStyle";

export const Layout = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState("light");

  const checkTheme = () => {
    if (toggleTheme === "light") {
      setToggleTheme("dark");
      localStorage.setItem("next-commerce-dark-value", "dark");
    } else if (toggleTheme === "dark") {
      setToggleTheme("light");
      localStorage.setItem("next-commerce-dark-value", "light");
    }
  };

  useEffect(() => {
    const themeValue = localStorage.getItem("next-commerce-dark-value");
    setToggleTheme(themeValue);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={toggleTheme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Navbar toggleTheme={toggleTheme} checkTheme={checkTheme} />
        {/* Sidebar */}
        {children}
        {/* Footer */}
      </ThemeProvider>
    </ThemeProvider>
  );
};
