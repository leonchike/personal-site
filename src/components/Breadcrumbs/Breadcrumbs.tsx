import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { capitalizeFirstLetter } from "@/utils/helpers";

import { BreadCrumb } from "@/types/global";

const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: BreadCrumb[] }) => {
  if (!breadcrumbs) return null;

  return (
    <BreadcrumbsWrapper>
      <ul>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          if (isLast) return;
          return (
            <BreadcrumbItem key={breadcrumb.name}>
              <Link href={breadcrumb.path}>
                {capitalizeFirstLetter(breadcrumb.name)}
              </Link>
            </BreadcrumbItem>
          );
        })}
      </ul>
    </BreadcrumbsWrapper>
  );
};

const BreadcrumbsWrapper = styled.nav`
  font-size: 1.2rem;

  ul {
    margin: 0;
    padding: 0;
  }
`;

const BreadcrumbItem = styled.li`
  display: inline;
  margin-right: 0.5rem;
  color: var(--color-offblack);
  &:after {
    content: "/";
    margin-left: 0.95rem;
    margin-right: 0.5rem;
  }
  /* &:last-child:after {
    content: none;
  } */

  &:hover {
    color: var(--color-gray-900);
  }
`;

export default Breadcrumbs;
