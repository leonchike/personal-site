import Head from "next/head";
import styled from "styled-components";

import DefaultPage from "@/components/layouts/DefaultPage";
import { PageWrapper } from "@/styles/reUseableStyles";
import HomeHeader from "@/components/HomeComponents/HomeHeader";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chike Nwankwo</title>
        <meta name="description" content="Chike Nwankwo's personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <HomeHeader />
      </PageWrapper>
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => <DefaultPage>{page}</DefaultPage>;
