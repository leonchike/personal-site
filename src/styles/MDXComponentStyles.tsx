import React, { ReactNode } from "react";
import styled from "styled-components";

// ts ignore file
// @ts-nocheck

const MDXComponentStyles = {
  p: (props: ReactNode) => <Paragraph {...props} />,
};

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 2rem;
`;

export default MDXComponentStyles;
