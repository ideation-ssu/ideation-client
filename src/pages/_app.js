import React from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "../utils/auth";

import "../../styles/global.css";
import "react-toastify/dist/ReactToastify.css";

function App({ Component, pageProps }) {
  return (
    <>
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
