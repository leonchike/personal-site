import React, { ReactNode } from "react";
import styled from "styled-components";

// ts ignore file
// @ts-nocheck

const MDXComponentStyles = {
  // @ts-ignore
  p: (props: ReactNode) => <Paragraph {...props} />,
  // @ts-ignore
  a: (props: ReactNode) => <Link {...props} />,
};

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 2.5rem;

  a {
    color: var(--color-offblack);
    text-decoration: underline;

    &:hover {
      opacity: 0.8;
    }

    &:visited {
      color: var(--color-offblack);
    }
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
