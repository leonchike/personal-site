import Image from "next/image";
import Link from "next/link";
import styles from "./TileFeatured.module.css";

// Types
import { Item } from "@/types/global";

import Button from "@/components/Button";
import Spacer from "../Spacer";

const TileFeatured = ({ data, category }: { data: Item; category: string }) => {
  return (
    <article className={styles.wrapper}>
      <Link href={`/${category}/${data.id}`}>
        <div className={styles.imageWrapper}>
          <Image src={data.thumbnailImage} alt={data.displayName} fill />
        </div>
        <h3 className={styles.lable}>{data.displayName}</h3>
        {!!data?.abstract && (
          <p className={styles.abstract}>{data?.abstract}</p>
        )}
        <Spacer height="2rem" />
        <Button>Read more</Button>
      </Link>
    </article>
  );
};

export default TileFeatured;
