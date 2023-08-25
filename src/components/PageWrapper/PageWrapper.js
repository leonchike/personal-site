import React from "react";
import styled, { keyframes } from "styled-components";
import { QUERIES } from "@/styles/styleConstants";
import useDOMLoaded from "@/hooks/useDOMLoaded";

const PageWrapper = ({ children }) => {
  const isDOMLoaded = useDOMLoaded();

  return (
    <PageWrapperStyles className={isDOMLoaded ? "fadeIn" : ""}>
      {children}
    </PageWrapperStyles>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PageWrapperStyles = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 74rem;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  opacity: 0;

  @media ${QUERIES.tabletAndUp} {
    padding-inline-start: 2.5rem;
    padding-inline-end: 2.5rem;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-inline-start: 5rem;
    padding-inline-end: 5rem;
  }

  &.fadeIn {
    animation: ${fadeIn} 500ms ease-in-out forwards;
  }
`;

export default PageWrapper;
