import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

import DefaultPage from "@/components/layouts/DefaultPage";
import { HeaderWrapper } from "@/styles/reUseableStyles";
import { QUERIES } from "@/styles/styleConstants";
import Breadcrumbs from "@/components/Breadcrumbs";
import TileContainer from "@/components/TileContainer";
import PageWrapper from "@/components/PageWrapper";

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

  if (!array) return null;

  // BreadCrumbs
  const breadcrumbs: BreadCrumb[] = [
    { name: "Chike Nwankwo", path: "/" },
    { name: category, path: `/${category}` },
  ];

  let subTitle;
  if (typeof category === "string") {
    // TODO: fix this by defining the parameters for category
    // @ts-ignore
    subTitle = state.appData.sections[category].subTitle;
  }

  return (
    <>
      <Head>
        <title>{capitalizeFirstLetter(category)}</title>
      </Head>
      <PageWrapper>
        <HeaderWrapper>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <HeaderText>{category}</HeaderText>
          {!!subTitle && <SubText>{subTitle}</SubText>}
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
  margin-block-end: 0rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: 5rem;
    margin-block-start: 2.3rem;
    margin-block-end: 0rem;
  }
`;

const SubText = styled.p`
  font-size: 1rem;
  margin-block-end: 2rem;
  color: var(--color-gray-900);

  @media ${QUERIES.tabletAndUp} {
    font-size: 1.4rem;
    margin-block-end: 5rem;
  }
`;

Index.getLayout = (page: React.ReactNode) => <DefaultPage>{page}</DefaultPage>;

export default Index;
