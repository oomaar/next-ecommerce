import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, theme } from "../global/GlobalStyle";
import { Layout } from "../global/Layout/Layout";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
