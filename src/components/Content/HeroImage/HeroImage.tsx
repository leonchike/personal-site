import Image from "next/image";
import styled from "styled-components";

import { QUERIES } from "@/styles/styleConstants";
import BlurImage from "@/components/BlurImage/BlurImage";

const HeroImage = ({
  displayImage,
  lowQualityImage,
  alt,
}: {
  displayImage: string;
  lowQualityImage: string;
  alt: string;
}) => {
  return (
    <ImageWrapper key={displayImage}>
      <BlurImage
        displayImage={displayImage}
        lowQualityImage={lowQualityImage}
        alt="Hero Image"
      />
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
