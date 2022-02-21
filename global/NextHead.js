import Head from "next/head";

export const NextHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>

      {/* Favicon */}
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Google Font Icons */}
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Icons"
        rel="stylesheet"
      />
    </Head>
  );
};
