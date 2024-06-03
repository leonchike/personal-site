/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getSortedPostsData } from "@/lib/actions";
import { formatDate } from "@/utils/helpers";

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
    <div className="">
      <Link href={`/blog/${post.id}`}>
        <img
          src={post.metadata.heroImage}
          alt={post.metadata.title}
          className="w-full h-64 object-cover"
        />
        <div className="pt-6">
          <h3 className="text-xl font-semibold mb-2 font-blog">
            {post.metadata.title}
          </h3>

          <p className="text-gray-600 mb-4 text-sm">
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
    <Link href={`/blog/${post.id}`}>
      <div className="border-t-[1px] pt-4 pb-12 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex gap-2 flex-col sm:flex-row">
          <div className="flex gap-2 flex-wrap pr-4 md:pr-8">
            {post.metadata.categories.map((category) => (
              <span
                key={category}
                className="text-sm text-gray-700 font-medium"
              >
                {category}
              </span>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold font-blog  mb-2 -mt-1">
              {post.metadata.title}
            </h3>
            <p className="text-gray-600 text-sm">
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
  // return (
  //   <Link href={`/blog/${post.id}`}>
  //     <div className="flex border-t-[1px] pt-4 pb-12">
  //       <div className="flex gap-2 flex-1">
  //         <div className="pr-4 md:pr-8">
  //           {post.metadata.categories.map((category) => (
  //             <span
  //               key={category}
  //               className="text-sm text-gray-700 font-medium"
  //             >
  //               {category}
  //             </span>
  //           ))}
  //         </div>

  //         <div className="flex flex-col justify-between pr-4">
  //           <div>
  //             <h3 className="text-lg font-semibold font-blog mb-2">
  //               {post.metadata.title}
  //             </h3>
  //             <p className="text-gray-600 mb-2 text-sm">
  //               {formatDate(post.publishDate)}
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //       <div>
  //         <img
  //           src={post.metadata.heroImage}
  //           alt={post.metadata.title}
  //           className="w-48 h-32 object-cover"
  //         />
  //       </div>
  //     </div>
  //   </Link>
  // );
}
