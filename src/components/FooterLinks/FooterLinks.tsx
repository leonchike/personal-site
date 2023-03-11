import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { QUERIES } from "@/styles/styleConstants";

import { useAppState } from "@/context/appContext";
import { AppState } from "@/types/global";

const FooterLinks = () => {
  //@ts-ignore
  const state: AppState = useAppState();

  //@ts-ignore
  if (!state || !state?.appData) return null;

  const routes = state?.appData?.routes;
  const socialLinks = state?.appData?.socialLinks;

  if (!routes) return null;

  return (
    <Wrapper>
      {!!routes && (
        <Routes role="list">
          {routes.map((route) => {
            if (route.footer === false) return;
            return (
              <Route key={route.name}>
                <StyledLink href={route.path} role="link">
                  {route.name}
                </StyledLink>
              </Route>
            );
          })}
        </Routes>
      )}
      {!!socialLinks && (
        <Routes role="list">
          {socialLinks.map((link) => (
            <Route key={link.name}>
              <StyledLink href={link.path} target="_blank" role="link">
                {link.name}
              </StyledLink>
            </Route>
          ))}
        </Routes>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${QUERIES.tabletAndUp} {
    align-items: flex-end;
  }
`;

const Routes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const Route = styled.li`
  &:not(:last-child) {
    &::after {
      content: "·";
      margin-inline-start: 0.5rem;
      margin-inline-end: 0.5rem;
    }
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.25rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: 1rem;
  }

  &:hover {
    color: var(--color-gray-700);
  }
`;

export default FooterLinks;
