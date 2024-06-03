import { getPost } from "@/lib/actions";
import { CustomMDX } from "@/components/ui/mdx-remote";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  console.log(post);

  return (
    <div>
      <h1>{post.id}</h1>
      <p>{post.publishDate}</p>
      <article className="mx-auto max-w-[37rem]">
        <CustomMDX source={post.content} />
      </article>
    </div>
  );
}
