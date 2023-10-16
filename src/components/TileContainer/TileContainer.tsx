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
  // check if data is empty
  if (!data || data.length === 0) {
    return (
      <section>
        <h1>No data</h1>
      </section>
    );
  }

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
