import type { AppProps } from "next/app";
import styled from "styled-components";
import localFont from "next/font/local";
import GlobalStyles from "@/styles/GlobalStyles";

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
      <Main className={MDSystem.variable}>
        {getLayout(<Component {...pageProps} />)}
      </Main>
    </>
  );
}

const Main = styled.main`
  font-family: var(--MDSystem);
`;
