import styled from "styled-components";

import TileBasic from "@/components/TileBasic";
import { TileWrapper } from "@/components/ViewWrappers/ViewWrappers";

import { Item } from "@/types/global";

const TileContainer = ({
  data,
  category,
}: {
  data: Item[];
  category: string;
}) => {
  return (
    <section>
      <TileWrapper>
        {data.map((item) => (
          <TileBasic key={item.id} data={item} category={category} />
        ))}
      </TileWrapper>
    </section>
  );
};

export default TileContainer;
