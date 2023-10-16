import React from "react";
import styles from "./FeaturedContent.module.css";

import { Item } from "@/types/global";
import { TileWrapper } from "@/components/ViewWrappers/ViewWrappers";

import TileBasic from "@/components/TileBasic";
import TileFeatured from "@/components/TileFeatured";

interface FeaturedContentProps {
  data: Item[];
  category: string;
}

const FeaturedContent = ({ data, category }: FeaturedContentProps) => {
  const featuredItem = data.find((item) => item.featured === true);
  // assign non-featured items to a new array
  if (!featuredItem) return null;
  const nonFeaturedItems = data.filter((item) => item.id !== featuredItem.id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.featured}>
        <TileFeatured data={featuredItem} category={category} />
      </div>
      <TileWrapper>
        {nonFeaturedItems.slice(0, 4).map((item) => (
          <TileBasic key={item.name} data={item} category={category} />
        ))}
      </TileWrapper>
    </div>
  );
};

export default FeaturedContent;
