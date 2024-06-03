export const formatDate = (dateString: string) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(dateString);
  // @ts-ignore
  return date.toLocaleDateString(undefined, options);
};
