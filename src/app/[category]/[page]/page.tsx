import React from "react";
import type { Metadata } from "next";
import { PageWrapper } from "@/components/ViewWrappers/ViewWrappers";
import PageHeader from "@/components/PageComponents/PageHeader";
import BlogContent from "@/components/Content/BlogContent";
import MoreContent from "@/components/Content/MoreContent";
import { getPageData } from "@/lib/getAppData";

// types
import { Category, Item } from "@/types/global";

// helpers
import { capitalizeFirstLetter } from "@/utils/helpers";

// Metadata
type Props = {
  params: {
    category: Category;
    page: string;
  };
};

interface Data {
  data: Item[];
  file: string;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = params.category;
  const page = params.page;
  // @ts-ignore
  const data: Data | null = await getPageData(category, page);

  if (!data) {
    return {
      title: "Loading...",
    };
  }

  // @ts-ignore
  const name =
    data.data.length && data.data[0]?.displayName
      ? data.data[0]?.displayName
      : page;

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

  // @ts-ignore
  const data: Data | null = await getPageData(category, page);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <PageWrapper>
      <PageHeader
        category={category}
        page={page}
        title={data.data.length ? data.data[0].displayName : ""}
      />
      <BlogContent data={data} />
      {/* @ts-expect-error Server Component */}
      <MoreContent category={category} page={page} />
    </PageWrapper>
  );
}
