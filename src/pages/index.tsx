import Head from "next/head";

import DefaultPage from "@/components/layouts/DefaultPage";
import { PageWrapper } from "@/styles/reUseableStyles";
import HomeHeader from "@/components/HomeComponents/HomeHeader";
import Section from "@/components/HomeComponents/Section";
import Spacer from "@/components/Spacer";

// Data
import main from "@/data/main.json";

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
        <Spacer height="4rem" />
        <Section data={main.teams} sectionTitle="teams" path="/teams" />
      </PageWrapper>
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => <DefaultPage>{page}</DefaultPage>;
