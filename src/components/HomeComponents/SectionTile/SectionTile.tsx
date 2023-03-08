import Image from "next/image";
import styled from "styled-components";

// Types
import { Item } from "@/types/global";

const SectionTile = ({ data }: { data: Item }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={data.displayImage} alt={data.displayName} fill />
      </ImageWrapper>
      <Label>{data.displayName}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  opacity: 1;
  transition: opacity 300ms ease;

  &:hover {
    opacity: 0.8;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  transform: filter 300ms ease;
`;

const Label = styled.h3`
  font-size: 1.125rem;
  font-weight: 550;
  padding-block-start: 1rem;
`;

export default SectionTile;
