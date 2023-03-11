import styled from "styled-components";
import Link from "next/link";

import TileBasic from "@/components/TileBasic";
import { QUERIES } from "@/styles/styleConstants";
import { TileWrapper } from "@/styles/reUseableStyles";
import { useAppState } from "@/context/appContext";

// Types
import { SectionProps, Item } from "@/types/global";

const Section = ({ sectionTitle, path }: SectionProps) => {
  const state = useAppState();

  if (!state || !state[sectionTitle]) {
    return null;
  }

  const data: Item[] = state[sectionTitle];

  return (
    <Wrapper>
      <Header>
        <Link href={path}>
          <Title>{sectionTitle}</Title>
        </Link>
        <MoreLink href={path} role="link">
          More <HideMobile>{sectionTitle}</HideMobile>
        </MoreLink>
      </Header>
      <TileWrapper role="list">
        {data.slice(0, 4).map((item) => (
          <TileBasic key={item.name} data={item} category={sectionTitle} />
        ))}
      </TileWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
`;

const MoreLink = styled(Link)`
  position: relative;
  font-weight: 500;
  color: var(--color-gray-700);
  font-size: 1.25rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: 1rem;
  }

  &:hover {
    color: var(--color-offblack);
  }

  &::after {
    content: "→";
    display: inline-block;
    padding-inline-start: 0.5rem;
    transform: translate3d(0rem, 0, 0);
    transition: transform 300ms ease;
  }

  &:hover::after {
    transform: translate3d(0.5rem, 0, 0);
    transition: transform 300ms ease;
  }
`;

const HideMobile = styled.span`
  display: none;
  text-transform: capitalize;

  @media ${QUERIES.tabletAndUp} {
    display: inline;
  }
`;

export default Section;
