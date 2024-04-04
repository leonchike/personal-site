import { WidthWrapper } from "@/components/ui/layout";
import { Suspense } from "react";
import Hero from "@/components/index-view/hero";
import WorkSection from "@/components/index-view/work";
import LeadershipSection from "@/components/index-view/leadership";

export default function Home() {
  return (
    <WidthWrapper>
      <Suspense fallback={null}>
        <Hero />
        <WorkSection />
        <LeadershipSection />
      </Suspense>
    </WidthWrapper>
  );
}
