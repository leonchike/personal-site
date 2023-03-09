import Image from "next/image";
import styled from "styled-components";

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
  height: 450px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default HeroImage;
