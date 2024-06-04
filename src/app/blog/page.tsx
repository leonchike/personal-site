/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getSortedPostsData } from "@/lib/actions";
import { formatDate } from "@/utils/helpers";

export default async function BlogHome() {
  const allPostsData = await getSortedPostsData();
  const allTags = Array.from(
    new Set(allPostsData.flatMap((post) => post.metadata.categories ?? []))
  );

  return (
    <main className="my-8 md:my-12 max-w-3xl mx-auto px-4 text-[#231A16] ">
      <Header />
      <FilterComponent tags={allTags} />
      <section className="mt-16 space-y-12">
        <div className="">
          {allPostsData.slice(0, 1).map((post) => (
            <LargePost key={post.id} post={post} />
          ))}
        </div>
        <div className="space-y-6">
          {allPostsData.slice(1).map((post) => (
            <SmallPost key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="mb-6">
      <h1 className="text-3xl md:text-4xl font-medium mb-4 font-blog">
        Welcome to My Blog
      </h1>
      <p className="text text-gray-800 ">
        Sharing my experiences and insights on web development, product and
        leadership.
      </p>
    </header>
  );
}

function FilterComponent({ tags }: { tags: string[] }) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-1 border-gray-500 border-[1px] text-gray-700 rounded-sm cursor-pointer hover:bg-gray-200 text-[0.75rem] tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

interface PostType {
  id: string;
  fullPath: string;
  publishDate: string;
  metadata: {
    title: string;
    heroImage: string;
    categories: string[];
    authorId: string;
    excerpt?: string;
  };
}

function LargePost({ post }: { post: PostType }) {
  return (
    <div>
      <Link href={`/blog/${post.id}`} className="group">
        <img
          src={post.metadata.heroImage}
          alt={post.metadata.title}
          className="w-full h-64 object-cover"
        />
        <div className="pt-6">
          <div>
            {post.metadata.categories.map((category) => (
              <span
                key={category}
                className="text-sm text-dark-gold font-medium pb-2"
              >
                {category}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2 font-blog group-hover:underline">
            {post.metadata.title}
          </h3>

          <p className="text-gray-600 mb-4 text-sm group-hover:underline">
            {formatDate(post.publishDate)}
          </p>
          {post.metadata.excerpt && (
            <p className="text-gray-700 font-blog text-sm">
              {post.metadata.excerpt}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}

function SmallPost({ post }: { post: PostType }) {
  return (
    <Link href={`/blog/${post.id}`} className="group">
      <div className="border-t-[1px] pt-4 pb-12 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex gap-2 flex-col sm:flex-row">
          <div className="flex gap-2 flex-wrap pr-4 md:pr-8">
            {post.metadata.categories.map((category) => (
              <span
                key={category}
                className="text-sm text-dark-gold font-medium"
              >
                {category}
              </span>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold font-blog  mb-2 -mt-1 group-hover:underline">
              {post.metadata.title}
            </h3>
            <p className="text-gray-600 text-sm group-hover:underline">
              {formatDate(post.publishDate)}
            </p>
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <img
            src={post.metadata.heroImage}
            alt={post.metadata.title}
            className="w-full h-auto sm:w-48 sm:h-32 object-cover"
          />
        </div>
      </div>
    </Link>
  );
}
