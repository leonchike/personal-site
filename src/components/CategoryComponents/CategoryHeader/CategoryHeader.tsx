import React from "react";
import styles from "./CategoryHeader.module.css";
import Breadcrumbs from "@/components/Breadcrumbs";
import { HeaderWrapper } from "@/components/ViewWrappers/ViewWrappers";

// Types
import { BreadCrumb } from "@/types/global";

const SUBTITLES = {
  projects: "Projects I've worked on both personal and for others.",
  teams: "Organizations I've had the pleasure to work and lead.",
  likes: "Places and things that have brought me joy.",
};

const CategoryHeader = ({
  category,
}: {
  category: "teams" | "projects" | "likes";
}) => {
  // BreadCrumbs
  const breadcrumbs: BreadCrumb[] = [
    { name: "Chike Nwankwo", path: "/" },
    { name: category, path: `/${category}` },
  ];

  const subTitle = SUBTITLES[category];

  return (
    <HeaderWrapper>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1 className={styles.headerText}>{category}</h1>
      <p className={styles.subText}>{subTitle}</p>
    </HeaderWrapper>
  );
};

export default CategoryHeader;
