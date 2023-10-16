import Image from "next/image";
import Link from "next/link";
import styles from "./TileBasic.module.css";

// Types
import { Item } from "@/types/global";

const SectionTile = ({ data, category }: { data: Item; category: string }) => {
  return (
    <article className={styles.wrapper}>
      <Link href={`/${category}/${data.id}`}>
        <div className={styles.imageWrapper}>
          <Image
            src={data.thumbnailImage}
            alt={data.displayName}
            fill
            priority
            className={styles.image}
          />
        </div>
        <h3 className={styles.label}>{data.displayName}</h3>
      </Link>
    </article>
  );
};

export default SectionTile;
