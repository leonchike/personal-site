import { WidthWrapper } from "@/components/ui/layout";
import { Suspense } from "react";
import Hero from "@/components/index-view/hero";
import WorkSection from "@/components/index-view/work";
import LeadershipSection from "@/components/index-view/leadership";
import AboutSection from "@/components/index-view/about";
import BackToTopButton from "@/components/ui/back-to-top";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <div className="animate-fadeIn1000 relative">
        <WidthWrapper>
          <Hero />
          <WorkSection />
        </WidthWrapper>

        <LeadershipSection />
        <WidthWrapper>
          <AboutSection />
        </WidthWrapper>
        <BackToTopButton />
      </div>
    </Suspense>
  );
}
