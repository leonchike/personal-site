import styled from "styled-components";
import Link from "next/link";

import TileBasic from "@/components/TileBasic";
import FeaturedContent from "@/components/HomeComponents/FeaturedContent";
import { QUERIES } from "@/styles/styleConstants";
import { TileWrapper } from "@/styles/reUseableStyles";
import { useAppState } from "@/context/appContext";

// Types
import { SectionProps, Item, AppState } from "@/types/global";

const Section = ({ sectionTitle, path }: SectionProps) => {
  const state: AppState | null = useAppState();

  if (!state || !state[sectionTitle]) {
    return null;
  }

  if (state[sectionTitle] === null) {
    return null;
  }

  const data: Item[] | null = state[sectionTitle];

  if (typeof data === null) {
    return null;
  }

  if (data === undefined) return null;

  // Check if section is live
  // @ts-ignore
  if (state.appData === null || state.appData === undefined) {
    return null;
  }
  // @ts-ignore
  const liveStatus = state?.appData.sections[sectionTitle].live;
  if (liveStatus === false) {
    return null;
  }

  // @ts-ignore
  const hasFeatured = data.find((item) => item.featured === true);

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
      {/* If no item has a featured property of true, render a basic list of tiles */}
      {!hasFeatured && (
        <TileWrapper role="list">
          {data.slice(0, 4).map((item) => (
            <TileBasic key={item.name} data={item} category={sectionTitle} />
          ))}
        </TileWrapper>
      )}
      {/* If an item has a featured property of true, render a featured tile */}
      {hasFeatured && <FeaturedContent data={data} category={sectionTitle} />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-block-end: 6rem;

  &:last-child {
    margin-block-end: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-end: calc(32 / 16 * 1rem);

  @media ${QUERIES.tabletAndUp} {
    margin-block-end: calc(48 / 16 * 1rem);
  }
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
