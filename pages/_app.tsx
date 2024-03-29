import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import AppHeader from "../components/global/AppHeader";
import AppFooter from "@components/global/AppFooter";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <AppHeader />
        <div style={{ minHeight: "85vh" }}>
          <Component {...pageProps} />
        </div>
        <AppFooter />
      </MantineProvider>
    </>
  );
}
