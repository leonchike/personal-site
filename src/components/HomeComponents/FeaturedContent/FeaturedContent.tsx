import React from "react";
import styled from "styled-components";

import { Item } from "@/types/global";
import { QUERIES } from "@/styles/styleConstants";
import { TileWrapper } from "@/styles/reUseableStyles";

import TileBasic from "@/components/TileBasic";
import TileFeatured from "@/components/TileFeatured";

interface FeaturedContentProps {
  data: Item[];
  category: string;
}

const FeaturedContent = ({ data, category }: FeaturedContentProps) => {
  const featuredItem = data.find((item) => item.featured === true);
  // assign non-featured items to a new array
  if (!featuredItem) return null;
  const nonFeaturedItems = data.filter((item) => item.id !== featuredItem.id);

  return (
    <Wrapper>
      <Featured>
        <TileFeatured data={featuredItem} category={category} />
      </Featured>
      <List role="list">
        {nonFeaturedItems.slice(0, 4).map((item) => (
          <TileBasic key={item.name} data={item} category={category} />
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "featured"
    "list";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 2rem;
  margin: 1rem 0;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas: "featured list";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 3.5rem;
    row-gap: 4rem;
  }
`;

const Featured = styled.div`
  grid-area: featured;
`;

const List = styled(TileWrapper)`
  grid-area: list;
  align-content: start;
`;

export default FeaturedContent;
