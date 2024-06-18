/* eslint-disable @next/next/no-img-element */
import { getSortedPostsData } from "@/lib/actions";
import { BlogProvider } from "@/context/blog-context";
import IndexContent from "@/components/blog/index-content";

export default async function BlogHome() {
  const allPostsData = await getSortedPostsData();
  const allTags = Array.from(
    new Set(allPostsData.flatMap((post) => post.postMetadata.categories ?? []))
  ).sort((a, b) => a.localeCompare(b));

  return (
    <BlogProvider>
      <main className="my-8 md:my-12 max-w-3xl mx-auto px-4 text-[#231A16] ">
        <Header />
        <IndexContent posts={allPostsData} filters={allTags} />
      </main>
    </BlogProvider>
  );
}

function Header() {
  return (
    <header className="mb-6">
      <h1 className="text-3xl md:text-4xl font-medium mb-4 font-blog">
        Digital Craftsmanship & Leadership
      </h1>
      <p className="text text-gray-800 ">
        Sharing my experiences and insights on web engineering, product and
        leadership.
      </p>
    </header>
  );
}
