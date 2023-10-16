import styles from "./MetaData.module.css";
import { Item } from "@/types/global";

const MetaData = ({ data }: { data: Item }) => {
  if (
    data.type === "teams" ||
    data.type === "projects" ||
    data.type === "likes"
  ) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.text}>{data.subTitle}</div>
      </div>
    );
  }

  return null;
};

export default MetaData;
