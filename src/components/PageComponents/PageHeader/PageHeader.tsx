import React from "react";
import styles from "./PageHeader.module.css";
import Breadcrumbs from "@/components/Breadcrumbs";
import { HeaderWrapper } from "@/components/ViewWrappers/ViewWrappers";

// Types
import { BreadCrumb } from "@/types/global";

const PageHeader = ({
  category,
  page,
  title,
}: {
  category: string;
  page: string;
  title: string;
}) => {
  // BreadCrumbs
  const breadcrumbs: BreadCrumb[] = [
    { name: "Chike Nwankwo", path: "/" },
    { name: category as string, path: `/${category}` },
    { name: page as string, path: `/${category}/${page}` },
  ];

  return (
    <HeaderWrapper>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1 className={styles.headerText}>{title}</h1>
    </HeaderWrapper>
  );
};

export default PageHeader;
