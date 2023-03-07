import React from "react";
import styled from "styled-components";
import Footer from "@/components/Footer";

const DefaultPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <div>{children}</div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default DefaultPage;
