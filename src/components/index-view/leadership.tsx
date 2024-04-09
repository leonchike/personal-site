import ROUTES, { getSamePageSectionId } from "@/utils/routes";
import { SectionTitle } from "./reusable-index-components";
import { getIndexData } from "@/actions/server-actions";
import { LeadershipType } from "@/utils/types";
import { ArrowUpRightIcon } from "@/components/ui/custom-icons";
import { WidthWrapper } from "@/components/ui/layout";

export default async function LeadershipSection() {
  const { leadershipData } = await getIndexData();

  return (
    <section
      id={getSamePageSectionId(ROUTES.HOME_LEADERSHIP_SECTION)}
      className="pt-8 md:pt-10 bg-[#48585e] pb-16 md:pb-24 w-full"
    >
      <WidthWrapper>
        <Heading />
        <Content data={leadershipData} />
      </WidthWrapper>
    </section>
  );
}

function Heading() {
  return (
    <div>
      <SectionTitle className="text-white">leadership</SectionTitle>
    </div>
  );
}

function Content({ data }: { data: LeadershipType }) {
  return (
    <div className="pt-10 md:pt-12 flex flex-col md:flex-row md:space-x-6 text-white">
      <div className="min-h-4 mb-6 md:mb-0 md:w-1/2 space-y-8">
        <div className="text-[1rem] lg:text-[1.5rem] max-w-[90%] xl:max-w-[70%]">
          {data.sectionStatement}
        </div>
        <CalendlyButton data={data} />
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-32 -mt-5">
          {data.leadershipData.map((item, index) => (
            <CallOuts key={index} data={item} />
          ))}
        </div>
        <div className="mt-4">
          <Highlights highlights={data.highlights} />
        </div>
      </div>
    </div>
  );
}

function CallOuts({ data }: { data: LeadershipType["leadershipData"][0] }) {
  return (
    <div className="">
      <div className="text-[4rem] md:text-[5rem] xl:text-[5.5rem] font-[350] leading-0">
        {data.heading}
      </div>
      <div className="text font-[550] tracking-wider -mt-4">
        {data.subheading}
      </div>
      <div className="pt-2 lg:max-w-[80%]">{data.description}</div>
    </div>
  );
}

function CalendlyButton({ data }: { data: LeadershipType }) {
  return (
    <div>
      <a href={data.calendlyLink} target="_blank" rel="noreferrer">
        <button
          className="flex gap-2 items-center border-[2px] border-white p-2 px-2 rounded-[4px] 
          hover:bg-white hover:text-[#89a8b2] transition-colors duration-300 ease-in-out 
        "
        >
          Schedule a call
          <ArrowUpRightIcon className="w-3 h-3" />
        </button>
      </a>
    </div>
  );
}

function Highlights({
  highlights,
}: {
  highlights: LeadershipType["highlights"];
}) {
  return (
    <div className="pt-6 md:pt-12">
      <h3 className="font-semibold tracking-wider text-[1.2rem]">Highlights</h3>
      <div className="flex flex-col gap-4 divide-y-[1px] mt-2">
        {highlights.map((highlight, index) => (
          <div key={index} className="pt-4 tracking-wider">
            {highlight}
          </div>
        ))}
      </div>
    </div>
  );
}
