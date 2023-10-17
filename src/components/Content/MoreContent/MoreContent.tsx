import React from "react";
import axios from "axios";
import styles from "./MoreContent.module.css";
import Link from "next/link";
import { getCategoryData } from "@/lib/getAppData";

import HorizontalDivider from "@/components/HorizontalDivider";
import Spacer from "@/components/Spacer";
import TileBasic from "@/components/TileBasic";
import API_Routes from "@/utils/APIRoutes";

import { Item } from "@/types/global";

interface Props {
  category: string;
  page: string;
}

const MoreContent = async ({ category, page }: Props) => {
  const data = getCategoryData(category);

  if (!data) return null;
  const dataArray = data.filter((item: Item) => item.id !== page);

  if (dataArray.length === 0) return null;

  return (
    <section>
      <Spacer height="4rem" />
      <HorizontalDivider />
      <h2 className={styles.title}>
        <span>
          <Link href={`/${category}`}>More {category}</Link>
        </span>
      </h2>
      <ul className={styles.titleWrapper} role="list">
        {dataArray.slice(0, 8).map((item: Item) => (
          <TileBasic
            key={item.id}
            category={category ? category.toString() : ""}
            data={item}
          />
        ))}
      </ul>
    </section>
  );
};

export default MoreContent;
