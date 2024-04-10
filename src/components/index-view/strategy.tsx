/* eslint-disable @next/next/no-img-element */
import ROUTES, { getSamePageSectionId } from "@/utils/routes";
import { SectionTitle } from "./reusable-index-components";
import { StrategyType } from "@/utils/types";
import { getIndexData } from "@/actions/server-actions";
import { WidthWrapper } from "@/components/ui/layout";
import ImageModal from "@/components/ui/image-modal";

export default async function StrategySection() {
  const { strategyData } = await getIndexData();

  if (!strategyData) return null;

  return (
    <section
      id={getSamePageSectionId(ROUTES.HOME_STRATEGY_SECTION)}
      className="pt-8 md:pt-10 pb-16 md:pb-24 bg-[#2c2c2e]"
    >
      <WidthWrapper>
        <Heading data={strategyData} />
        <div className="pt-8 md:pt-12 grid md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_1fr] gap-12 md:gap-8 isolate">
          <Statement data={strategyData} />
          <Content data={strategyData} />
        </div>
      </WidthWrapper>
    </section>
  );
}

function Heading({ data }: { data: StrategyType }) {
  return (
    <div>
      <SectionTitle className="text-white">{data.sectionHeading}</SectionTitle>
    </div>
  );
}

function Statement({ data }: { data: StrategyType }) {
  return (
    <div className="">
      <div className="sticky top-[100px] lg:w-[85%] lg:text-[1.3rem] text-white border-l-2 border-yellow-300 pl-4">
        {data.sectionStatement.main}
      </div>
    </div>
  );
}

function Content({ data }: { data: StrategyType }) {
  return (
    <div className="text-white">
      <div className="text-sm text-gray-300 italic mb-6">
        {data.sectionStatement.sub}
      </div>
      <div className="space-y-9">
        {data.strategyData.map((work, index) => (
          <Work key={index} work={work} />
        ))}
      </div>
    </div>
  );
}

function Work({ work }: { work: StrategyType["strategyData"][0] }) {
  return (
    <div>
      <div className="pb-4">
        <div className="font-[550] pb-1">{work.heading}</div>
        <div className="text-[12px] text-gray-100">{work.description}</div>
      </div>
      <ImageModal
        title={work.heading}
        subtitle={work.description}
        imgUrl={work.images.lg}
      >
        <div className="flex flex-col items-center rounded-md overflow-hidden">
          <img
            src={work.images.lg}
            alt={work.heading}
            className="w-full md:hidden max-h-[80vh]"
          />
          <img
            src={work.images.sm}
            alt={work.heading}
            className="hidden md:block w-full max-h-[80vh]"
          />
        </div>
      </ImageModal>
    </div>
  );
}
