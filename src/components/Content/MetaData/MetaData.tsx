import styled from "styled-components";
import { Item } from "@/types/global";

const MetaData = ({ data }: { data: Item }) => {
  if (data.type === "teams") {
    return (
      <Wrapper>
        <Text>{data.subTitle}</Text>
      </Wrapper>
    );
  }
  if (data.type === "projects") {
    return (
      <Wrapper>
        <Text>{data.subTitle}</Text>
      </Wrapper>
    );
  }

  return null;
};

const Wrapper = styled.div``;

const Text = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;
export default MetaData;
