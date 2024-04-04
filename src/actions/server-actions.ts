"use server";

import aboutData from "@/data/about.data";
import workData from "@/data/work.data";

export async function getIndexData() {
  const data = {
    aboutData,
    workData,
  };

  return data;
}
