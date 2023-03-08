import React from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const { page } = router.query;

  console.log(page);

  return (
    <div>
      <h1>{page}</h1>
    </div>
  );
};

export default Page;
