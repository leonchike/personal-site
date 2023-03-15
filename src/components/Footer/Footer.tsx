import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { QUERIES } from "@/styles/styleConstants";
import { PageWrapper } from "@/styles/reUseableStyles";
import HorizontalDivider from "@/components/HorizontalDivider";
import FooterLinks from "@/components/FooterLinks";
import { routes } from "@/data/routes";

const Footer = () => {
  const homeRoute = routes.find((route) => route.name === "Home");

  return (
    <FooterWrapper>
      <PageWrapper>
        <HorizontalDivider />
        <Content>
          <LogoWrapper>
            {!!homeRoute && (
              <Link href={homeRoute.path}>
                Chike <br /> Nwankwo
              </Link>
            )}
            {!homeRoute && (
              <>
                Chike <br /> Nwankwo
              </>
            )}
          </LogoWrapper>
          <FooterLinks />
        </Content>
      </PageWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  margin-block-start: 8rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  opacity: 0.4;
  transition: opacity 500ms ease-in-out;

  padding-block-start: 6rem;
  padding-block-end: 6rem;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  &:hover {
    opacity: 1;
    transition: opacity 500ms ease-in-out;
  }
`;

const LogoWrapper = styled.div`
  font-size: 2.33rem;
  line-height: 2.75rem;
  font-weight: 700;
`;

export default Footer;
