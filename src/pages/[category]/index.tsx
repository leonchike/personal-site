import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

import DefaultPage from "@/components/layouts/DefaultPage";
import { PageWrapper } from "@/styles/reUseableStyles";
import Breadcrumbs from "@/components/Breadcrumbs";
import TileContainer from "@/components/TileContainer";

import { useAppState } from "@/context/appContext";

// helpers
import { capitalizeFirstLetter } from "@/utils/helpers";

// Types
import { BreadCrumb, AppState } from "@/types/global";
import Spacer from "@/components/Spacer";

const Index = () => {
  const router = useRouter();
  const { category } = router.query;
  //@ts-ignore
  const state: AppState = useAppState();

  if (!state || !state.appData) return null;

  if (!category) return null;
  if (typeof category !== "string") return null;
  // @ts-ignore
  const array = state[category];

  // console.log(array);

  if (!array) return null;

  // BreadCrumbs
  const breadcrumbs: BreadCrumb[] = [
    { name: "Chike Nwankwo", path: "/" },
    { name: category, path: `/${category}` },
  ];

  return (
    <>
      <Head>
        <title>{capitalizeFirstLetter(category)}</title>
      </Head>
      <PageWrapper>
        <Wrapper>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <Spacer height="2.3rem" />
          <HeaderText>{category}</HeaderText>
          <Spacer height="4rem" />
        </Wrapper>
        <TileContainer data={array} category={category} />
      </PageWrapper>
    </>
  );
};

const Wrapper = styled.header`
  max-width: 48rem;
  padding-block-start: 8rem;
`;

const HeaderText = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  text-transform: capitalize;
`;

Index.getLayout = (page: React.ReactNode) => <DefaultPage>{page}</DefaultPage>;

export default Index;
