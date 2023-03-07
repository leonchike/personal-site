import styled from "styled-components";
import { QUERIES } from "@/styles/styleConstants";

export const PageWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 74rem;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;

  @media ${QUERIES.tabletAndUp} {
    padding-inline-start: 2rem;
    padding-inline-end: 2rem;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-inline-start: 4rem;
    padding-inline-end: 4rem;
  }
`;
