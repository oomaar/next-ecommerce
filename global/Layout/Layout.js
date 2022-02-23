import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Sidebar } from "../../components";
import { Navbar } from "../../components/Navbar/Navbar";
import { darkTheme, GlobalStyle, lightTheme, theme } from "../GlobalStyle";

export const Layout = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState("light");
  const [showSidebar, setShowSidebar] = useState(false);

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
    themeValue ? setToggleTheme(themeValue) : setToggleTheme("light");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={toggleTheme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Navbar toggleTheme={toggleTheme} checkTheme={checkTheme} setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {children}
        {/* Footer */}
      </ThemeProvider>
    </ThemeProvider>
  );
};
