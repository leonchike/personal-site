import Head from "next/head";

import DefaultPage from "@/components/layouts/DefaultPage";
import { PageWrapper } from "@/styles/reUseableStyles";
import HomeHeader from "@/components/HomeComponents/HomeHeader";
import Section from "@/components/HomeComponents/Section";
import Spacer from "@/components/Spacer";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chike Nwankwo</title>
        <meta name="description" content="Chike Nwankwo's personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ErrorBoundary>
        <PageWrapper>
          <HomeHeader />
          <Spacer height="5rem" />
          <Section sectionTitle="teams" path="/teams" />
          <Section sectionTitle="projects" path="/projects" />
          <Section sectionTitle="likes" path="/likes" />
        </PageWrapper>
      </ErrorBoundary>
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => <DefaultPage>{page}</DefaultPage>;
