import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// Types
import { Item } from "@/types/global";

import { QUERIES } from "@/styles/styleConstants";

const SectionTile = ({ data, category }: { data: Item; category: string }) => {
  return (
    <Wrapper>
      <Link href={`/${category}/${data.id}`}>
        <ImageWrapper>
          <Image
            src={data.thumbnailImage}
            alt={data.displayName}
            fill
            priority
          />
        </ImageWrapper>
        <Label>{data.displayName}</Label>
      </Link>
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
  height: clamp(80px, 60vw, 100px);
  transform: filter 300ms ease;

  img {
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: 140px;
  }
`;

const Label = styled.h3`
  font-size: 1.25rem;
  font-weight: 550;
  padding-block-start: 1rem;

  //limit 2 lines and add ellipsis
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default SectionTile;
