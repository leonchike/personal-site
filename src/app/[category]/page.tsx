import React from "react";
import axios from "axios";
import type { Metadata } from "next";
import API_Routes from "@/utils/APIRoutes";

import { PageWrapper } from "@/components/ViewWrappers/ViewWrappers";
import CategoryHeader from "@/components/CategoryComponents/CategoryHeader";

// helpers
import { capitalizeFirstLetter } from "@/utils/helpers";

// Data fetching
const getCategoryData = async (category: string) => {
  const baseUrl = API_Routes.getRoute("categoryData");
  const url = `${baseUrl}?category=${category}`;

  try {
    const res = await axios.get(url);
    return res.data.data;
  } catch (error) {
    console.log(error);
    return;
  }
};

// Metadata
type Props = {
  params: {
    category: string;
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
  const data = await getCategoryData(category);
  console.log(data);

  return (
    <PageWrapper>
      <CategoryHeader category={category} />
    </PageWrapper>
  );
}