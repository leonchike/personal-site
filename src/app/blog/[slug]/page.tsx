import { getPost } from "@/lib/actions";
import { CustomMDX } from "@/components/ui/mdx-remote";
import BlogHeader from "@/components/blog/blog-header";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  console.log(post);

  return (
    <main className="my-8 md:my-12 max-w-[52rem] mx-auto px-4 text-[#231A16]">
      <BlogHeader post={post} />
      <article className="mx-auto max-w-[34rem] font-blog">
        <CustomMDX source={post.content} />
      </article>
    </main>
  );
}
