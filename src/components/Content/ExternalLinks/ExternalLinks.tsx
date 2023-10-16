import styles from "./ExternalLinks.module.css";
import { Item } from "@/types/global";

const ExternalLinks = ({ links }: { links: Item["externalLinks"] }) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      {links.map((link, index) => (
        <a className={styles.link} href={link.url} target="_blank" key={index}>
          <span className={styles.linkText}>{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default ExternalLinks;
