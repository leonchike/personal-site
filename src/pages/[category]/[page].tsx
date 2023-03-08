import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

import DefaultPage from "@/components/layouts/DefaultPage";
import { PageWrapper } from "@/styles/reUseableStyles";
import Breadcrumbs from "@/components/Breadcrumbs";
import Spacer from "@/components/Spacer";
import BlogContent from "@/components/Content/BlogContent";

import { pageType } from "@/data/data";

// Types
import { BreadCrumb } from "@/types/global";

const Page = () => {
  const router = useRouter();
  const { page, category } = router.query;

  if (!page || !category) {
    return null;
  }
  if (typeof page !== "string" || typeof category !== "string") {
    return null;
  }

  // BreadCrumbs
  const breadcrumbs: BreadCrumb[] = [
    { name: "Chike Nwankwo", path: "/" },
    { name: category, path: `/${category}` },
    { name: page, path: `/${category}/${page}` },
  ];

  let contentType;
  if (pageType[category]) {
    contentType = pageType[category];
  } else {
    throw new Error("Category not found");
  }

  return (
    <PageWrapper>
      <Wrapper>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Spacer height="2.3rem" />
        <HeaderText>{page}</HeaderText>
        <Spacer height="2rem" />
      </Wrapper>
      {contentType === "blog" && (
        <BlogContent category={category} page={page} />
      )}
    </PageWrapper>
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

Page.getLayout = (page: React.ReactNode) => <DefaultPage>{page}</DefaultPage>;

export default Page;
