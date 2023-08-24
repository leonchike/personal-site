/*
  This component is used to display a blurred image while the high quality image is loading.
  TO USE:
    1. Import the component
    2. Add the component to the JSX
    3. Pass in the displayImage and lowQualityImage props
    4. Add the styles to the component

*/

import React, { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./BlurImage.module.css";

const BlurImage = ({
  displayImage,
  lowQualityImage,
  alt,
}: {
  displayImage: string;
  lowQualityImage: string;
  alt: string;
}) => {
  const [loaded, setLoaded] = useState(false);

  // provide a fallback image if lowQualityImage is not provided
  if (!lowQualityImage) {
    lowQualityImage = displayImage;
  }

  useEffect(() => {
    const img = new window.Image();
    img.src = displayImage;
    img.onload = () => {
      setLoaded(true);
    };
  }, [displayImage]);

  return (
    <Image
      src={loaded ? displayImage : lowQualityImage}
      alt={alt ? `${alt}` : "image"}
      fill
      className={loaded ? styles.highQualityImage : styles.lowQualityImage}
    />
  );
};

export default BlurImage;
