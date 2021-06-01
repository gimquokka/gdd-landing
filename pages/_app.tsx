import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { AppProps } from "next/app";

import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  const DESCRIPTION = "개인 맞춤 분양 정보 추천 서비스";

  return (
    <>
      <Head>
        <title>토드홈</title>
        <meta property="og:title" content={"토드홈"} />
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:description" content={DESCRIPTION} />
        <link rel="shortcut icon" href="favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
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
  height: 100%;
  min-height: 100vh;
  position: relative;
`;
