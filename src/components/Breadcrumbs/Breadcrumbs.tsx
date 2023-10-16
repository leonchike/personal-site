import React from "react";
import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

import { capitalizeFirstLetter } from "@/utils/helpers";

import { BreadCrumb } from "@/types/global";

const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: BreadCrumb[] }) => {
  if (!breadcrumbs) return null;

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          if (isLast) return;
          return (
            <li className={styles.listItem} key={breadcrumb.name}>
              <Link href={breadcrumb.path}>
                {capitalizeFirstLetter(breadcrumb.name)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
