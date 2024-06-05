/* eslint-disable @next/next/no-img-element */
import { getSortedPostsData } from "@/lib/actions";
import { SmallPost, LargePost } from "@/components/blog/post-previews";

export default async function BlogHome() {
  const allPostsData = await getSortedPostsData();
  const allTags = Array.from(
    new Set(allPostsData.flatMap((post) => post.postMetadata.categories ?? []))
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
            className="px-4 py-1 border-gray-500 border-[1px] text-gray-700 rounded-sm text-[0.75rem] tracking-wider select-none"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
