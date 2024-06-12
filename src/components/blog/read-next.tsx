/* eslint-disable @next/next/no-img-element */
import { getSortedPostsData } from "@/lib/actions";
import { PostType } from "@/utils/types";
import { ReadNextPostPreview } from "@/components/blog/post-previews";
import clsx from "clsx";
import Link from "next/link";

export default async function ReadNext({
  currentPostId,
}: {
  currentPostId: string;
}) {
  const allPostsData = await getSortedPostsData();
  const featuredPosts = getFeaturedPosts(allPostsData, currentPostId);

  return featuredPosts.length ? (
    <section className="border-t-[1px] border-primary-dark mt-16 lg:mt-24">
      <div className="py-4 font-medium">Read Next</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* First post */}
        <div>
          {featuredPosts[0] && (
            <div className="border-b-[1px] border-dark-gold pb-8 md:border-none">
              <ReadNextPostPreview
                key={featuredPosts[0].id}
                post={featuredPosts[0]}
                showExcerpt={false}
                index={0}
              />
            </div>
          )}
        </div>
        {/* Remaining posts */}
        <div className="flex flex-col gap-8 divide-y-[1px] divide-dark-gold">
          {featuredPosts.slice(1).map((post, index) => (
            <div
              key={post.id}
              className={clsx({
                "pt-6": index > 0,
              })}
            >
              <ReadNextPostPreview
                post={post}
                showExcerpt={false}
                index={index + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : null;
}

function getFeaturedPosts(
  allPostsData: PostType[],
  currentPostId: string
): PostType[] {
  // Step 1: Randomize the order of the posts
  const shuffledPosts = allPostsData.sort(() => 0.5 - Math.random());

  // Step 2: Identify the first category of the current post
  const currentPost = allPostsData.find((post) => post.id === currentPostId);
  const firstCategory = currentPost?.postMetadata.categories[0];

  // Step 3: Filter out the current post from selection options
  const filteredPosts = shuffledPosts.filter(
    (post) => post.id !== currentPostId
  );

  // Step 4: Select at most 2 posts that have the same first category
  const sameCategoryPosts = filteredPosts
    .filter((post) => post.postMetadata.categories[0] === firstCategory)
    .slice(0, 2);

  // Step 5: Select 2-4 posts at random, ensuring no duplicates
  const remainingPosts = filteredPosts.filter(
    (post) => !sameCategoryPosts.includes(post)
  );
  const randomPosts = remainingPosts.slice(0, 4 - sameCategoryPosts.length);

  // Step 6: Return at most 4 posts
  return [...sameCategoryPosts, ...randomPosts].slice(0, 4);
}

export async function InlineReadNext({
  category,
  postSlug,
}: {
  category: string;
  postSlug: string;
}) {
  if (!category) return null;

  const allPostsData = await getSortedPostsData();
  const similarPosts = getSimilarPosts(allPostsData, category, postSlug);

  if (!similarPosts.length) return null;

  return (
    <aside className="hidden lg:block relative float-right w-[60%] ml-8 py-4 space-y-4 -mr-32 border-t-[1px] border-primary-dark">
      <div className="font-medium font-sans">Related Articles</div>
      <div className="divide-gray-500 flex flex-col gap-6">
        {similarPosts.map((post, index) => (
          <Link key={index} href={`/blog/${post.id}`} target="_blank">
            <div className="flex">
              <div className="w-20 h-20 flex-shrink-0 mr-4">
                {post.postMetadata.heroImage && (
                  <img
                    src={post.postMetadata.heroImage}
                    loading="lazy"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <h3 className="overflow-hidden text-ellipsis max-h-16 leading-tight text-md">
                {post.postMetadata.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}

function getSimilarPosts(
  allPostsData: PostType[],
  category: string,
  currentPostId: string
) {
  // Step 1: Filter posts that match the category and exclude the current post
  const filteredPosts = allPostsData.filter(
    (post) =>
      post.postMetadata.categories.includes(category) &&
      post.id !== currentPostId
  );

  // Step 2: Shuffle the filtered posts to randomize the order
  const shuffledPosts = filteredPosts.sort(() => 0.5 - Math.random());

  // Step 3: Return the top 4 posts
  return shuffledPosts.slice(0, 4);
}
