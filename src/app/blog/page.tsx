/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getSortedPostsData } from "@/lib/actions";

export default async function BlogHome() {
  const allPostsData = await getSortedPostsData();
  const allTags = Array.from(
    new Set(allPostsData.flatMap((post) => post.metadata.categories ?? []))
  );

  console.log(allPostsData);

  return (
    <main className="my-8 md:my-12 max-w-3xl mx-auto px-4 text-[#231A16]">
      <Header />
      <FilterComponent tags={allTags} />
      <section className="mt-16">
        <div className="mb-8">
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
      <h1 className="text-3xl font-medium mb-2">Welcome to My Blog</h1>
      <p className="text text-gray-800 font-blog">
        Sharing my experiences and insights on web development, programming and
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
            className="px-4 py-1 border-gray-700 border-[1px] text-gray-700 rounded-full cursor-pointer hover:bg-gray-200 text-[0.75rem] tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function LargePost({ post }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <Link href={`/blog/${post.id}`}>
          <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
        </Link>
        <p className="text-gray-600 mb-4">
          {new Date(post.publishDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <p className="text-gray-700">{post.excerpt}</p>
      </div>
    </div>
  );
}

function SmallPost({ post }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
      <img
        src={post.image}
        alt={post.title}
        className="w-32 h-32 object-cover"
      />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <Link href={`/blog/${post.id}`}>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
          </Link>
          <p className="text-gray-600 mb-2">
            {new Date(post.publishDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
        <p className="text-gray-700">{post.excerpt}</p>
      </div>
    </div>
  );
}
