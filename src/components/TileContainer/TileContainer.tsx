import styled from "styled-components";
import Link from "next/link";

import TileBasic from "@/components/TileBasic";
import { TileWrapper } from "@/styles/reUseableStyles";

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

export default TileContainer;
