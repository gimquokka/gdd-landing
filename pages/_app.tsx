import React, { useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";

import * as gtag from "src/utils/gtag";
import GlobalStyle from "styles/global";

const { GA_APP_ID } = process.env;

function MyApp({ Component, pageProps }: AppProps) {
  const DESCRIPTION = "개인 맞춤 분양 정보 추천 서비스";
  const queryClient = new QueryClient();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_APP_ID}`}
        ></script>
      </Head>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Main>
            <Component {...pageProps} />
          </Main>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

const Main = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
`;
