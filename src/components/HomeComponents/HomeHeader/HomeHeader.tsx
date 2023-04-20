import React from "react";
import styled from "styled-components";
import MDXComponent from "@/components/MDXComponent";
import { useAppState } from "@/context/appContext";

// Components
import Tags from "@/components/Tags";
import Spacer from "@/components/Spacer";
import DownloadResume from "@/components/DownloadResume";

// Data
import * as About from "@/data/about/about.mdx";

const HomeHeader = () => {
  const state = useAppState();

  // @ts-ignore
  if (!state || !state?.appData) {
    return null;
  }

  if (state.appData === null) {
    return null;
  }

  // @ts-ignore
  const tags = state?.appData?.about?.tags;

  return (
    <Wrapper>
      <Name>
        Chike <br /> Nwankwo
      </Name>
      <Spacer height="2rem" />
      <div>
        <MDXComponent File={About.default} />
      </div>
      <Spacer height="1.5rem" />
      {!!tags && <Tags tags={tags} />}
      <Spacer height="3rem" />
      <DownloadResume />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  max-width: 48rem;
  padding-block-start: 8rem;
`;

const Name = styled.h1`
  font-size: 4.33rem;
  line-height: 5rem;
`;

export default HomeHeader;
