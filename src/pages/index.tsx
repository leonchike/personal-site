import Head from "next/head";
import styled from "styled-components";

import DefaultPage from "@/components/layouts/DefaultPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chike Nwankwo</title>
        <meta name="description" content="Chike Nwankwo's personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hello>hello</Hello>
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => <DefaultPage>{page}</DefaultPage>;

const Hello = styled.h1`
  font-size: 3.5rem;
  font-weight: 675;
`;
