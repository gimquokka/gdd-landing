import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { AppProps } from "next/app";

import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>홈써치</title>
      </Head>
      <GlobalStyle />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default MyApp;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;
