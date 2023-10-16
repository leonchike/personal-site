import { PageWrapper } from "@/components/ViewWrappers/ViewWrappers";
import HomeHeader from "@/components/HomeComponents/HomeHeader";

export default async function page() {
  return (
    <PageWrapper>
      <HomeHeader />
    </PageWrapper>
  );
}
