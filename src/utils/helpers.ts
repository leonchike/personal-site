export const formatDate = (dateString: string) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(dateString);
  // @ts-ignore
  return date.toLocaleDateString(undefined, options);
};

export function calculateReadingTime(content: string) {
  // Remove HTML tags and special characters to get clean text
  const plainText = content.replace(/<\/?[^>]+(>|$)/g, "");

  // Split the text into words
  const words = plainText.split(/\s+/);

  // Calculate the number of words
  const wordCount = words.length;

  // Define words per minute
  const wordsPerMinute = 183;

  // Calculate reading time in minutes
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
}
