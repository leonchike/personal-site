import React from "react";
import type { Metadata } from "next";

import { PageWrapper } from "@/components/ViewWrappers/ViewWrappers";
import CategoryHeader from "@/components/CategoryComponents/CategoryHeader";
import TileContainer from "@/components/TileContainer";
import { getCategoryData } from "@/lib/getAppData";

// helpers
import { capitalizeFirstLetter } from "@/utils/helpers";

// types
import { Category, Item } from "@/types/global";

// Metadata
type Props = {
  params: {
    category: Category;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = capitalizeFirstLetter(params.category);

  return {
    title: category,
  };
}

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category;
  const data: Item[] | null = getCategoryData(category);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <PageWrapper>
      <CategoryHeader category={category as "teams" | "projects" | "likes"} />
      <TileContainer data={data} category={category} />
    </PageWrapper>
  );
}
