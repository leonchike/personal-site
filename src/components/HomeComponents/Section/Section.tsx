import Link from "next/link";
import styles from "./Section.module.css";

import TileBasic from "@/components/TileBasic";
import FeaturedContent from "@/components/HomeComponents/FeaturedContent";
import { TileWrapper } from "@/components/ViewWrappers/ViewWrappers";

// Types
import { SectionProps } from "@/types/global";

const Section = ({ sectionTitle, path, data }: SectionProps) => {
  if (!data) return null;

  const hasFeatured = data.find((item) => item.featured === true);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <Link href={path}>
          <h2 className={styles.title}>{sectionTitle}</h2>
        </Link>
        <Link className={styles.moreLink} href={path} role="link">
          More <span className={styles.hideMobile}>{sectionTitle}</span>
        </Link>
      </div>
      {/* If no item has a featured property of true, render a basic list of tiles */}
      {!hasFeatured && (
        <TileWrapper>
          {data.slice(0, 4).map((item) => (
            <TileBasic key={item.name} data={item} category={sectionTitle} />
          ))}
        </TileWrapper>
      )}
      {/* If an item has a featured property of true, render a featured tile */}
      {hasFeatured && <FeaturedContent data={data} category={sectionTitle} />}
    </section>
  );
};

export default Section;
