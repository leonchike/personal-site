import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Section {id}</h1>
    </div>
  );
};

export default Page;