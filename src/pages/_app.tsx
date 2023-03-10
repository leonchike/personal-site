import type { AppProps } from "next/app";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import localFont from "next/font/local";
import GlobalStyles from "@/styles/GlobalStyles";
import MDXComponentStyles from "@/styles/MDXComponentStyles";
import { AppProvider } from "@/context/appContext";

const MDSystem = localFont({
  src: "../styles/fonts/MDSystem-VF.woff2",
  variable: "--MDSystem",
  fallback: [
    "Helvetica",
    "Franklin Gothic Medium",
    "Franklin Gothic",
    "ITC Franklin Gothic",
    "sans-serif",
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <GlobalStyles />
      <AppProvider>
        <Main className={MDSystem.variable}>
          <MDXProvider components={MDXComponentStyles}>
            {getLayout(<Component {...pageProps} />)}
          </MDXProvider>
        </Main>
      </AppProvider>
    </>
  );
}

const Main = styled.main`
  font-family: var(--MDSystem);
`;
