import Image from "next/image";
import styled from "styled-components";

import { QUERIES } from "@/styles/styleConstants";

const HeroImage = ({ displayImage }: { displayImage: string }) => {
  return (
    <ImageWrapper>
      <Image src={displayImage} alt="Hero Image" fill />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: clamp(180px, 50vw, 240px);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndUp} {
    height: 370px;
  }

  @media ${QUERIES.laptopAndUp} {
    height: 400px;
  }
`;

export default HeroImage;
