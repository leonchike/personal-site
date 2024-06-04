/* eslint-disable @next/next/no-img-element */
import { PostType } from "@/lib/types";
import { formatDate, calculateReadingTime } from "@/utils/helpers";

interface BlogHeaderProps {
  post: PostType;
}

export default function BlogHeader({ post }: BlogHeaderProps) {
  const { title, publishDate, authorId, heroImage, categories } =
    post.postMetadata;

  return (
    <div className="flex flex-col items-center gap-10 md:gap-16  mb-10 md:mb-12">
      <div className="flex flex-col items-center gap-4">
        <div>
          {categories.map((category) => (
            <span key={category} className="text-sm text-dark-gold font-medium">
              {category}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-medium text-center">{title}</h1>
        <div className="pt-2">
          <AuthorInfo
            authorId={authorId}
            publishDate={publishDate}
            content={post.content}
          />
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
  content,
}: {
  authorId: string;
  publishDate: string;
  content: string;
}) {
  const author = getAuthor(authorId);
  if (!author) return null;
  return (
    <div className="flex items-center">
      <img
        src={author.image}
        alt={author.name}
        className="w-14 h-14 rounded-full mr-3"
      />
      <div className="flex flex-col">
        <p className="text-sm">By {author.name}</p>
        <div className="text-xs text-gray-500 flex items-center">
          <p>{formatDate(publishDate)}</p>
          <span className="mx-2 w-1 h-1 bg-gray-500 rounded-full"></span>
          <ReadingTime content={content} />
        </div>
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
      "https://imagedelivery.net/camphNQlX5poswEZJbu_Cw/73383366-5cbf-4db7-be1b-11684c496a00/thumbnails",
  },
];

function getAuthor(authorId: string) {
  return AUTHORS.find((author) => author.id === authorId);
}

function ReadingTime({ content }: { content: string }) {
  console.log(content);
  const time = calculateReadingTime(content);

  return <span>{time} minute read</span>;
}
