import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../global/GlobalStyle";
import { Layout } from "../global/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};