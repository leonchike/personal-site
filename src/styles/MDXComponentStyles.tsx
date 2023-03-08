import React, { ReactNode } from "react";
import styled from "styled-components";

// ts ignore file
// @ts-nocheck

const MDXComponentStyles = {
  p: (props: ReactNode) => <Paragraph {...props} />,
  a: (props: ReactNode) => <Link {...props} />,
};

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 2.5rem;

  a {
    color: var(--color-offblack);
  }
`;

const Link = styled.a`
  color: var(--color-offblack);

  &:hover {
    color: var(--color-primary);
  }

  &:visited {
    color: var(--color-offblack);
  }
`;

export default MDXComponentStyles;
