import React from "react";
import styles from "./BlogContent.module.css";

import Spacer from "@/components/Spacer";
import HeroImage from "@/components/Content/HeroImage";
import MetaData from "@/components/Content/MetaData";
import RenderMarkdown from "@/components/Content/RenderMarkdown";
import ExternalLinks from "@/components/Content/ExternalLinks";

import { Item } from "@/types/global";

interface StateData {
  file: string;
  data: Item[];
}

const BlogContent = ({ data }: { data: StateData }) => {
  return (
    <div className={styles.wrapper}>
      <HeroImage
        displayImage={data.data[0].displayImage}
        lowQualityImage={data.data[0].thumbnailImage}
        alt={data.data[0].alt}
      />
      <Spacer height="3rem" />
      <MetaData data={data.data[0]} />
      <Spacer height="3rem" />
      <RenderMarkdown content={data.file} />
      <Spacer height="3rem" />
      <ExternalLinks links={data.data[0].externalLinks} />
    </div>
  );
};

export default BlogContent;
