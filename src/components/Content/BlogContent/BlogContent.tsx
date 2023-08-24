import React from "react";
import styled from "styled-components";

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
  console.log(data);

  return (
    <Wrapper>
      <HeroImage displayImage={data.data[0].displayImage} />
      <Spacer height="3rem" />
      <MetaData data={data.data[0]} />
      <Spacer height="3rem" />
      <RenderMarkdown content={data.file} />
      <Spacer height="3rem" />
      <ExternalLinks links={data.data[0].externalLinks} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: var(--blog-width);
`;

export default BlogContent;
