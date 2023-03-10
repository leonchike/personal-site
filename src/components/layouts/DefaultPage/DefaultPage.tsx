import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "@/components/Footer";

const DefaultPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Chike Nwankwo</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Chike Nwankwo's personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dch8jsjcf/image/upload/v1678486644/og-image_vkxd1b.png"
        />
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
