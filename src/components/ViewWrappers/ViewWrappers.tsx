import React from "react";
import styles from "./ViewWrappers.module.css";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.pageWrapper}>{children}</div>;
};

export const TileWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.tileWrapper}>{children}</div>;
};

export const HeaderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.headerWrapper}>{children}</div>;
};
