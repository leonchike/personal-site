import React from "react";
import styled from "styled-components";
import MDXComponent from "@/components/MDXComponent";

// Components
import Tags from "@/components/Tags";
import Spacer from "@/components/Spacer";

// Data
import * as About from "@/data/about/about.mdx";
import main from "@/data/main.json";

const HomeHeader = () => {
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
      <Tags tags={main.about_tags} />
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
