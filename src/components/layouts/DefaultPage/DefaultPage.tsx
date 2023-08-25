import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "@/components/Footer";

const DefaultPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Wrapper>
        <div>{children}</div>
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default DefaultPage;
