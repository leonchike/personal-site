import React from "react";
import { useRouter } from "next/router";

import main from "@/data/main.json";
import Link from "next/link";

// Types
import { Item } from "@/types/global";

const Index = () => {
  const router = useRouter();
  const { category } = router.query;

  if (!category) return null;
  if (typeof category !== "string") return null;
  // @ts-ignore
  const array = main[category];

  // console.log(array);

  if (!array) return null;

  return (
    <div>
      <h1>{category}</h1>
      <ul>
        {array.map((item: Item) => (
          <Link href={`/${category}/${item.id}`} key={item.id}>
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Index;
