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
    <div className={styles.imageContainer}>
      <Image
        src={lowQualityImage || displayImage}
        alt={alt || "image"}
        fill
        className={styles.lowQualityImage}
      />
      <Image
        src={displayImage}
        alt={alt || "image"}
        fill
        className={`${styles.highQualityImage} ${loaded ? styles.visible : ""}`}
      />
    </div>
  );
};

export default BlurImage;
