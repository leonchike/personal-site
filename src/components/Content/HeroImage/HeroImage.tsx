import styles from "./HeroImage.module.css";

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
    <div className={styles.imageWrapper} key={displayImage}>
      <BlurImage
        displayImage={displayImage}
        lowQualityImage={lowQualityImage}
        alt="Hero Image"
      />
    </div>
  );
};

export default HeroImage;
