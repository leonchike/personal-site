import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

import DefaultPage from "@/components/layouts/DefaultPage";
import { PageWrapper, HeaderWrapper } from "@/styles/reUseableStyles";
import { QUERIES } from "@/styles/styleConstants";
import Breadcrumbs from "@/components/Breadcrumbs";
import TileContainer from "@/components/TileContainer";

import { useAppState } from "@/context/appContext";

// helpers
import { capitalizeFirstLetter } from "@/utils/helpers";

// Types
import { BreadCrumb, AppState } from "@/types/global";

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
        <HeaderWrapper>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <HeaderText>{category}</HeaderText>
        </HeaderWrapper>
        <TileContainer data={array} category={category} />
      </PageWrapper>
    </>
  );
};

const HeaderText = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  text-transform: capitalize;
  margin-block-start: 0.85rem;
  margin-block-end: 4rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: 5rem;
    margin-block-start: 2.3rem;
    margin-block-end: 4rem;
  }
`;

Index.getLayout = (page: React.ReactNode) => <DefaultPage>{page}</DefaultPage>;

export default Index;
