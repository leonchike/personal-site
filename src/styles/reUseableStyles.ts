import styled from "styled-components";
import { QUERIES } from "@/styles/styleConstants";

export const PageWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 74rem;
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

export const TileWrapper = styled.ul`
  --min-column-width: min(140px, 100%);
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--min-column-width), 1fr)
  );
  column-gap: 1.5rem;
  row-gap: 2rem;

  @media ${QUERIES.tabletAndUp} {
    --min-column-width: min(200px, 100%);
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--min-column-width), 1fr)
    );
    column-gap: 3.5rem;
    row-gap: 4rem;
  }
`;

export const HeaderWrapper = styled.header`
  max-width: var(--blog-width);
  padding-block-start: 6rem;

  @media ${QUERIES.tabletAndUp} {
    padding-block-start: 8rem;
  }
`;
