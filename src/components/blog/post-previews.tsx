/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { PostType } from "@/utils/types";
import { formatDate } from "@/utils/helpers";
import clsx from "clsx";

export function SmallPost({ post }: { post: PostType }) {
  return (
    <Link href={`/blog/${post.id}`} className="group">
      <div className="border-t-[1px] pt-4 pb-12 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex gap-2 flex-col sm:flex-row">
          <div className="flex gap-2 flex-wrap pr-4 md:pr-8 w-[12ch]">
            {post.postMetadata.categories.map((category) => (
              <span
                key={category}
                className="text-sm text-dark-gold font-medium"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold font-blog mb-2 -mt-1 group-hover:underline break-words">
              {post.postMetadata.title}
            </h3>
            <p className="text-gray-600 text-sm group-hover:underline">
              {formatDate(post.publishDate)}
            </p>
          </div>
        </div>
        <div className="w-full sm:w-48 sm:flex-shrink-0">
          <img
            src={post.postMetadata.heroImage}
            alt={post.postMetadata.title}
            className="w-full h-auto sm:h-32 object-cover"
          />
        </div>
      </div>
    </Link>
  );
}

export function LargePost({
  post,
  showExcerpt = true,
}: {
  post: PostType;
  showExcerpt?: boolean;
}) {
  return (
    <div>
      <Link href={`/blog/${post.id}`} className="group">
        <img
          src={post.postMetadata.heroImage}
          alt={post.postMetadata.title}
          className="w-full h-64 object-cover"
        />
        <div className="pt-6">
          <div>
            {post.postMetadata.categories.map((category) => (
              <span
                key={category}
                className="text-sm text-dark-gold font-medium pb-2"
              >
                {category}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2 font-blog group-hover:underline">
            {post.postMetadata.title}
          </h3>

          <p className="text-gray-600 mb-4 text-sm group-hover:underline">
            {formatDate(post.publishDate)}
          </p>
          {post.postMetadata.excerpt && (
            <p className="text-gray-700 font-blog text-sm">
              {post.postMetadata.excerpt}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}

export function ReadNextPostPreview({
  post,
  showExcerpt = true,
  index,
}: {
  post: PostType;
  showExcerpt?: boolean;
  index: number;
}) {
  return (
    <div>
      <Link href={`/blog/${post.id}`} className="group">
        <div>
          {post.postMetadata.categories.map((category) => (
            <div
              key={category}
              className={clsx("pb-4", {
                "": !!index,
                hidden: !index,
              })}
            >
              <span className="text-sm text-dark-gold font-medium pb-2">
                {category}
              </span>
            </div>
          ))}
        </div>

        <img
          src={post.postMetadata.heroImage}
          alt={post.postMetadata.title}
          className={clsx("w-full object-cover h-64", {
            "h-36 md:h-36": !!index,
            "h-64": !index,
          })}
        />
        <div className="pt-4">
          {post.postMetadata.categories.map((category) => (
            <div
              key={category}
              className={clsx({
                "": !index,
                hidden: !!index,
              })}
            >
              <span className="text-sm text-dark-gold font-medium pb-2 hidden md:block">
                {category}
              </span>
            </div>
          ))}
          <h3
            className={clsx(
              "font-semibold mb-2 font-blog group-hover:underline",
              {
                "text-lg": !!index,
                "text-xl": !index,
              }
            )}
          >
            {post.postMetadata.title}
          </h3>

          <p className="text-gray-600 mb-4 text-sm group-hover:underline">
            {formatDate(post.publishDate)}
          </p>
          {post.postMetadata.excerpt && showExcerpt && (
            <p className="text-gray-700 font-blog text-sm">
              {post.postMetadata.excerpt}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
