import Head from "next/head";

export const NextHead = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>

            {/* Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
                rel="stylesheet"
            />
        </Head>
    );
};