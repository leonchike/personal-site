import styled from "styled-components";
import Link from "next/link";

import TileBasic from "@/components/TileBasic";

import { QUERIES } from "@/styles/styleConstants";

import { Item } from "@/types/global";

const TileContainer = ({
  data,
  category,
}: {
  data: Item[];
  category: string;
}) => {
  return (
    <Wrapper>
      <TileWrapper role="list">
        {data.map((item) => (
          <TileBasic key={item.id} data={item} category={category} />
        ))}
      </TileWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const TileWrapper = styled.ul`
  --min-column-width: min(120px, 100%);
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

export default TileContainer;
