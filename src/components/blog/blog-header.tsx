/* eslint-disable @next/next/no-img-element */
import { PostType } from "@/lib/types";

interface BlogHeaderProps {
  post: PostType;
}

export default function BlogHeader({ post }: BlogHeaderProps) {
  const { title, publishDate, authorId, heroImage, categories } =
    post.postMetadata;

  return (
    <div className="flex flex-col items-center gap-10 md:gap-16 mb-10 md:mb-16">
      <div className="flex flex-col items-center gap-4">
        <div>
          {categories.map((category) => (
            <span key={category} className="text-sm text-gray-700 font-medium">
              {category}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-medium">{title}</h1>
        <div className="pt-2">
          <AuthorInfo authorId={authorId} publishDate={publishDate} />
        </div>
      </div>
      {heroImage && (
        <img
          src={heroImage}
          alt={`Cover Image for ${title}`}
          className="w-full h-96 object-cover"
        />
      )}
    </div>
  );
}

function AuthorInfo({
  authorId,
  publishDate,
}: {
  authorId: string;
  publishDate: string;
}) {
  const author = getAuthor(authorId);
  if (!author) return null;
  return (
    <div className="flex items-center">
      <img
        src={author.image}
        alt={author.name}
        className="w-10 h-10 rounded-full mr-3"
      />
      <div className="flex flex-col">
        <p className="text-sm">By {author.name}</p>
        <p className="text-xs text-gray-500">{formatDate(publishDate)}</p>
      </div>
    </div>
  );
}

const AUTHORS = [
  {
    id: "F5EF78ED-5758-4D9F-8D49-2537ADD4F299",
    name: "Leon Nwankwo",
    email: "leon.nwankwo@gmail.com",
    image:
      "https://imagedelivery.net/camphNQlX5poswEZJbu_Cw/7b87c386-8cac-4b58-f46c-09892d5a1700/original",
  },
];

function getAuthor(authorId: string) {
  return AUTHORS.find((author) => author.id === authorId);
}

const formatDate = (dateString: string) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(dateString);
  // @ts-ignore
  return date.toLocaleDateString(undefined, options);
};
