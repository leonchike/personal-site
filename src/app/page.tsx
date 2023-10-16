import { PageWrapper } from "@/components/ViewWrappers/ViewWrappers";
import HomeHeader from "@/components/HomeComponents/HomeHeader";
import Spacer from "@/components/Spacer";
import HomeSections from "@/components/HomeComponents/HomeSections";

export default async function page() {
  return (
    <PageWrapper>
      {/* @ts-expect-error Server Component */}
      <HomeHeader />
      <Spacer height="5rem" />
      {/* @ts-expect-error Server Component */}
      <HomeSections />
    </PageWrapper>
  );
}
