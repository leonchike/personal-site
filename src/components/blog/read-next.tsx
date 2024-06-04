import { getSortedPostsData } from "@/lib/actions";
import { PostType } from "@/utils/types";
import { ReadNextPostPreview } from "@/components/blog/post-previews";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First post */}
        <div>
          {featuredPosts[0] && (
            <ReadNextPostPreview
              key={featuredPosts[0].id}
              post={featuredPosts[0]}
              showExcerpt={false}
              index={0}
            />
          )}
        </div>
        {/* Remaining posts */}
        <div className="flex flex-col gap-8">
          {featuredPosts.slice(1).map((post, index) => (
            <ReadNextPostPreview
              key={post.id}
              post={post}
              showExcerpt={false}
              index={index + 1}
            />
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
