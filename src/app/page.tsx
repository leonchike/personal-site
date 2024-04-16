import { WidthWrapper } from "@/components/ui/layout";
import { Suspense } from "react";
import Hero from "@/components/index-view/hero";
import WorkSection from "@/components/index-view/work";
import LeadershipSection from "@/components/index-view/leadership";
import AboutSection from "@/components/index-view/about";
import StrategySection from "@/components/index-view/strategy";
import BackToTopButton from "@/components/ui/back-to-top";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <div className="animate-fadeIn1000">
        <WidthWrapper>
          <Hero />
          <WorkSection />
        </WidthWrapper>

        <LeadershipSection />
        <StrategySection />
        <WidthWrapper>
          <AboutSection />
          <Footer />
        </WidthWrapper>
        <BackToTopButton />
      </div>
    </Suspense>
  );
}
