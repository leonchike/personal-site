import React from "react";
import { useRouter } from "next/router";

import main from "@/data/main.json";
import Link from "next/link";

const Category = () => {
  const router = useRouter();
  const { page } = router.query;

  console.log(page);

  return (
    <div>
      <h1>{page}</h1>
    </div>
  );
};

export default Category;
