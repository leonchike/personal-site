import styled from "styled-components";
import { QUERIES } from "@/styles/styleConstants";

export const PageWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 80rem;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;

  @media ${QUERIES.tabletAndUp} {
    padding-inline-start: 2.5rem;
    padding-inline-end: 2.5rem;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-inline-start: 5rem;
    padding-inline-end: 5rem;
  }
`;
