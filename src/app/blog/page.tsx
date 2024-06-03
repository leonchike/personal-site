import Link from "next/link";
import { getSortedPostsData } from "@/lib/actions";

export default async function BlogHome() {
  const allPostsData = await getSortedPostsData();
  console.log(allPostsData);

  return (
    <div>
      {allPostsData.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}>
            <h1>{post.id}</h1>
            <p>{post.publishDate}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
