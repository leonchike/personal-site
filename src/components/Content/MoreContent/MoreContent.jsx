import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { useAppState } from "@/context/appContext";
import HorizontalDivider from "@/components/HorizontalDivider";
import Spacer from "@/components/Spacer";
import TileBasic from "@/components/TileBasic";
import { QUERIES } from "@/styles/styleConstants";

const MoreContent = ({ category, page }) => {
  // category is either teams, projects, wrting etc
  // page is the slug from the category page
  const state = useAppState();
  if (!state || !state[category]) return null;

  const dataArray = state[category].filter((item) => item.id !== page);

  return (
    <Wrapper>
      <Spacer height="4rem" />
      <HorizontalDivider />
      <Title>
        <span>
          <Link href={`/${category}`}>More {category}</Link>
        </span>
      </Title>
      <TileWrapper role="list">
        {dataArray.slice(0, 8).map((item) => (
          <TileBasic key={item.id} category={category} data={item} />
        ))}
      </TileWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  margin-block-start: 5rem;
  margin-block-end: 3rem;
  text-transform: capitalize;

  span {
    &:hover {
      opacity: 0.8;
    }
  }
`;

const TileWrapper = styled.ul`
  --min-column-width: min(200px, 100%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--min-column-width), 1fr)
    );
    column-gap: 3.5rem;
  }
`;

export default MoreContent;
