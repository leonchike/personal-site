import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// Types
import { Item } from "@/types/global";

import { QUERIES } from "@/styles/styleConstants";
import Button from "@/components/Button";
import Spacer from "../Spacer";

const TileFeatured = ({ data, category }: { data: Item; category: string }) => {
  return (
    <Wrapper>
      <Link href={`/${category}/${data.id}`}>
        <ImageWrapper>
          <Image src={data.thumbnailImage} alt={data.displayName} fill />
        </ImageWrapper>
        <Label>{data.displayName}</Label>
        {!!data?.abstract && <Abstract>{data?.abstract}</Abstract>}
        <Spacer height="2rem" />
        <Button>Read more</Button>
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
  height: clamp(160px, 60vw, 200px);
  transform: filter 300ms ease;

  img {
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: calc(140 * 2 * 1px);
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

const Abstract = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  white-space: pre-line;
  padding-block-start: 1rem;
  //limit 5 lines and add ellipsis
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default TileFeatured;
