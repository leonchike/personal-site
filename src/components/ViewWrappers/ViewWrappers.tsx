import React from "react";
import styles from "./ViewWrappers.module.css";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.pageWrapper}>{children}</div>;
};
