"use server";

import aboutData from "@/data/about.data";
import workData from "@/data/work.data";
import leadershipData from "@/data/leadership.data";

export async function getIndexData() {
  const data = {
    aboutData,
    workData,
    leadershipData,
  };

  return data;
}
