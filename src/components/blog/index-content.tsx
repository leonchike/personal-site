"use client";

import { useEffect } from "react";
import { useBlogContext } from "@/context/blog-context";
import { SmallPost, LargePost } from "@/components/blog/post-previews";
import { PostType } from "@/utils/types";

interface IndexContentProps {
  posts: PostType[];
  filters: string[];
}

export default function IndexContent({ posts, filters }: IndexContentProps) {
  const { dispatch } = useBlogContext();

  useEffect(() => {
    dispatch({ type: "SET_POSTS", posts });
    dispatch({ type: "SET_FILTERS", filters });
  }, [posts, filters, dispatch]);

  return (
    <main>
      <FilterComponent />
      <BlogPosts />
    </main>
  );
}

function FilterComponent() {
  const { state, dispatch } = useBlogContext();

  const handleFilterClick = (filter: string) => {
    dispatch({
      type: "SET_CURRENT_FILTER",
      currentFilter: state.currentFilter === filter ? "" : filter,
    });
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        {state.filters.map((tag, index) => (
          <span
            key={index}
            className={`px-4 py-1 border-dark-gold border-[1px] text-dark-gold rounded-sm text-[0.75rem] tracking-wider select-none cursor-pointer ${
              state.currentFilter === tag ? "bg-dark-gold text-white" : ""
            }`}
            onClick={() => handleFilterClick(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function BlogPosts() {
  const { state } = useBlogContext();

  const filteredPosts = state.currentFilter
    ? state.posts.filter((post) =>
        post.postMetadata.categories.includes(state.currentFilter)
      )
    : state.posts;

  return (
    <section className="mt-16 space-y-12">
      <div className="">
        {filteredPosts.slice(0, 1).map((post) => (
          <LargePost key={post.id} post={post} />
        ))}
      </div>
      <div className="space-y-6">
        {filteredPosts.slice(1).map((post) => (
          <SmallPost key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
