import React from "react";
import styled from "styled-components";
import MDXComponent from "@/components/MDXComponent";

import About from "@/data/about/about.mdx";

const HomeHeader = () => {
  return (
    <Wrapper>
      <Name>
        Chike <br /> Nwankwo
      </Name>
      <div>
        <MDXComponent File={About} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  max-width: 48rem;
  padding-block-start: 8rem;
`;

const Name = styled.h1`
  margin-block-end: 2rem;
  font-size: 4.6rem;
  line-height: 5rem;
`;

export default HomeHeader;
