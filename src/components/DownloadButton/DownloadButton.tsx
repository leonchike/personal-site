import React from "react";
import styled from "styled-components";
import Icon from "@/components/Icon";

const DownloadButton = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}{" "}
      <IconWrapper>
        <Icon id="arrowDown" size="1.2rem" strokeWidth="2px" />
      </IconWrapper>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  border: #222 2px solid;
  border-radius: 0.25rem;
  padding: 0.4rem 0.8rem;
  gap: 0.3rem;

  transition: all 0.5s ease;

  &:hover {
    background-color: #222;
    color: #fff;
  }
`;

const IconWrapper = styled.div`
  transform: translateY(calc(2.5 / 16 * 1rem));
`;

export default DownloadButton;
