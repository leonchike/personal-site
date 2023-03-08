import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import DefaultPage from "@/components/layouts/DefaultPage";
import { PageWrapper } from "@/styles/reUseableStyles";
import Breadcrumbs from "@/components/Breadcrumbs";
import TileContainer from "@/components/TileContainer";

import main from "@/data/main.json";

// Types
import { Item, BreadCrumb } from "@/types/global";
import Spacer from "@/components/Spacer";

const Index = () => {
  const router = useRouter();
  const { category } = router.query;

  if (!category) return null;
  if (typeof category !== "string") return null;
  // @ts-ignore
  const array = main[category];

  // console.log(array);

  if (!array) return null;

  // BreadCrumbs
  const breadcrumbs: BreadCrumb[] = [
    { name: "Chike Nwankwo", path: "/" },
    { name: category, path: `/${category}` },
  ];

  return (
    <PageWrapper>
      <Wrapper>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Spacer height="1.5rem" />
        <HeaderText>{category}</HeaderText>
      </Wrapper>
      <TileContainer data={array} category={category} />
    </PageWrapper>
  );
};

const Wrapper = styled.header`
  max-width: 48rem;
  padding-block-start: 7rem;
`;

const HeaderText = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-transform: capitalize;
`;

Index.getLayout = (page: React.ReactNode) => <DefaultPage>{page}</DefaultPage>;

export default Index;
