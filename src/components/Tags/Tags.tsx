import styled from "styled-components";

const Tags = ({ tags }: { tags: string[] }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <List role="list">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.75rem;
  border-radius: 4px;

  li {
    background-color: var(--color-gray-100);
    padding: 0.75rem 1rem;
    font-weight: 550;
    font-size: calc(15 / 16 * 1rem);
    line-height: 1;
    letter-spacing: 0.03rem;
  }
`;

export default Tags;
