import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";

import DefaultPage from "@/components/layouts/DefaultPage";
import { PageWrapper } from "@/styles/reUseableStyles";
import Breadcrumbs from "@/components/Breadcrumbs";
import Spacer from "@/components/Spacer";
import BlogContent from "@/components/Content/BlogContent";
import MoreContent from "@/components/Content/MoreContent";

// Types
import { BreadCrumb, Item } from "@/types/global";

interface StateData {
  file: string;
  data: Item[];
}

const Page = () => {
  const [data, setData] = useState({} as StateData);
  const router = useRouter();
  const { page, category } = router.query;

  useEffect(() => {
    if (!page && !category) {
      return;
    }
    axios
      .get(`/api/${category}?page=${page}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, category]);

  if (!page || !category || !data.data || !data.file) {
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

  let contentType = data.data[0].type;

  return (
    <PageWrapper>
      <Wrapper>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Spacer height="2.3rem" />
        <HeaderText>{data.data[0].displayName}</HeaderText>
        <Spacer height="2rem" />
      </Wrapper>
      {contentType === "team" && <BlogContent data={data} />}
      <MoreContent category={category} page={page} />
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
