import React from "react";
import axios from "axios";
import API_Routes from "@/utils/APIRoutes";
import type { Metadata } from "next";
import { PageWrapper } from "@/components/ViewWrappers/ViewWrappers";
import PageHeader from "@/components/PageComponents/PageHeader";
import BlogContent from "@/components/Content/BlogContent";
import MoreContent from "@/components/Content/MoreContent";

// types
import { Category } from "@/types/global";

// helpers
import { capitalizeFirstLetter } from "@/utils/helpers";

// Data fetching
const getPageData = async (category: string, page: string) => {
  const baseUrl = API_Routes.getRoute("pageData");
  const url = `${baseUrl}?category=${category}&page=${page}`;

  try {
    const res = await axios.get(url);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return;
  }
};

// Metadata
type Props = {
  params: {
    category: Category;
    page: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category;
  const page = params.page;
  const data = await getPageData(category, page);

  const name = !!data?.data[0]?.displayName ? data?.data[0]?.displayName : page;

  return {
    title: capitalizeFirstLetter(name),
  };
}

export default async function Page({
  params,
}: {
  params: { category: string; page: string };
}) {
  const category = params.category;
  const page = params.page;

  const data = await getPageData(category, page);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <PageWrapper>
      <PageHeader
        category={category}
        page={page}
        title={data.data[0].displayName}
      />
      <BlogContent data={data} />
      {/* @ts-expect-error Server Component */}
      <MoreContent category={category} page={page} />
    </PageWrapper>
  );
}
