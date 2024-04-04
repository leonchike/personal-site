"use server";

import aboutData from "@/data/about.data";

export async function getIndexData() {
  const data = {
    aboutData,
  };

  return data;
}
