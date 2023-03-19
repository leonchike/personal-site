import styled from "styled-components";
import { Item } from "@/types/global";

const ExternalLinks = ({ links }: { links: Item["externalLinks"] }) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <Wrapper role="list">
      {links.map((link, index) => (
        <StyledLink href={link.url} target="_blank" key={index}>
          <LinkText>{link.name}</LinkText>
        </StyledLink>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.75rem;
  border-radius: 4px;
`;

const StyledLink = styled.a`
  background-color: var(--color-gray-100);
  padding: 1.15rem 1.6rem 1rem 1.6rem;
  font-weight: 500;
  font-size: calc(17 / 16 * 1rem);
  line-height: 1;
  letter-spacing: 0.03rem;
`;

const LinkText = styled.span`
  &::after {
    content: "↗";
    display: inline-block;
    padding-inline-start: 0.25rem;
    transform: translate3d(0rem, -0.05rem, 0);
    transition: transform 300ms ease;
  }

  &:hover::after {
    transform: translate3d(0.2rem, -0.25rem, 0);
    transition: transform 300ms ease;
  }
`;

export default ExternalLinks;
