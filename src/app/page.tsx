import { WidthWrapper } from "@/components/ui/layout";
import Hero from "@/components/index-view/hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <WidthWrapper>
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
    </WidthWrapper>
  );
}
