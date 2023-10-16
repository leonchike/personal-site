import styles from "./Tags.module.css";

const Tags = ({ tags }: { tags: string[] }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <ul className={styles.list} role="list">
      {tags.map((tag) => (
        <li className={styles.items} key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
