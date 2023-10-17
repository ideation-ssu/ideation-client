import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { ToastContainer } from "react-toastify";

import * as gtag from "../lib/gtag";
import { AuthProvider } from "../utils/auth";

import "../../styles/global.css";
import "react-toastify/dist/ReactToastify.css";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;

    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {process.env.NODE_ENV !== "development" && (
        <>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
      <Head>
        <title>Ideation</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AuthProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          closeOnClick
          theme="light"
          pauseOnHover={false}
        />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default App;
