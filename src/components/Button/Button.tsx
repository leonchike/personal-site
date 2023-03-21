import React, { FC, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { QUERIES } from "@/styles/styleConstants";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>
    <Span>{children}</Span>
  </StyledButton>
);

const StyledButton = styled.button`
  background-color: var(--color-gray-100);
  border: none;
  padding: 10px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Span = styled.span`
  position: relative;
  font-weight: 500;
  color: var(--color-offblack);
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

export default Button;
