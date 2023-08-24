import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";

import DefaultPage from "@/components/layouts/DefaultPage";
import { PageWrapper, HeaderWrapper } from "@/styles/reUseableStyles";
import { QUERIES } from "@/styles/styleConstants";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogContent from "@/components/Content/BlogContent";
import MoreContent from "@/components/Content/MoreContent";
import Head from "next/head";
import useFetchData from "@/hooks/usePagedata";

// helpers
import { capitalizeFirstLetter } from "@/utils/helpers";

// Types
import { BreadCrumb, Item } from "@/types/global";

interface StateData {
  file: string;
  data: Item[];
}

const Page = () => {
  // const [data, setData] = useState({} as StateData);
  const router = useRouter();
  const { page, category } = router.query;

  const { data, error } = useFetchData(page, category);

  // BreadCrumbs
  const breadcrumbs: BreadCrumb[] = [
    { name: "Chike Nwankwo", path: "/" },
    { name: category as string, path: `/${category}` },
    { name: page as string, path: `/${category}/${page}` },
  ];

  if (!data) return null;
  if (error) return <div>error</div>;

  let contentType = data.data[0].type;

  return (
    <>
      <Head>
        <title>{capitalizeFirstLetter(data?.data[0]?.displayName)}</title>
      </Head>
      <PageWrapper>
        <HeaderWrapper>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <HeaderText>{data.data[0].displayName}</HeaderText>
        </HeaderWrapper>
        {contentType === "teams" && <BlogContent data={data} />}
        {contentType === "projects" && <BlogContent data={data} />}
        {contentType === "likes" && <BlogContent data={data} />}
        <MoreContent category={category} page={page} />
      </PageWrapper>
    </>
  );
};

const HeaderText = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  text-transform: capitalize;
  margin-block-start: 1.3rem;
  margin-block-end: 2rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: 4rem;
    margin-block-start: 2.3rem;
    margin-block-end: 4rem;
  }
`;

Page.getLayout = (page: React.ReactNode) => <DefaultPage>{page}</DefaultPage>;

export default Page;
