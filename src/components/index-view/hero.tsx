import { getIndexData } from "@/actions/server-actions";
import ROUTES, { getSamePageAnchorLink } from "@/utils/routes";
import { ArrowDownIcon } from "@/components/ui/custom-icons";

export default async function Hero() {
  const { aboutData } = await getIndexData();

  return (
    <section className="py-16 md:py-28">
      <Title aboutData={aboutData} />
      <AnchorLinks />
    </section>
  );
}

interface TitleProps {
  aboutData: {
    name: string;
    currentPosition: string;
    personalStatement: string;
  };
}

function Title({ aboutData }: TitleProps) {
  return (
    <div>
      <h1 className="">Hi, I&apos;m {aboutData.name},</h1>
      <h2>{aboutData.currentPosition}</h2>
      <div className="w-full md:w-[75vw] xl:w-[50vw] pt-4">
        <p className="text-[1.7rem] leading-9 tracking-[0.02em] font-[375]">
          {aboutData.personalStatement}
        </p>
      </div>
    </div>
  );
}

function AnchorLinks() {
  const LINKS = [
    { label: "Work", href: getSamePageAnchorLink(ROUTES.HOME_WORK_SECTION) },
    {
      label: "Leadership",
      href: getSamePageAnchorLink(ROUTES.HOME_LEADERSHIP_SECTION),
    },
    {
      label: "Strategy",
      href: getSamePageAnchorLink(ROUTES.HOME_STRATEGY_SECTION),
    },
    {
      label: "Collaboration",
      href: getSamePageAnchorLink(ROUTES.HOME_COLLABORATION_SECTION),
    },
  ];

  console.log(LINKS);

  return (
    <div className="pt-6 flex flex-col gap-3 text-[rgb(20,20,20)]">
      {LINKS.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="inline-flex items-center gap-1 border-b border-current hover:border-transparent transition-colors duration-300 w-min h-[1.15rem]"
        >
          {link.label}{" "}
          <span>
            <ArrowDownIcon width="12" />
          </span>
        </a>
      ))}
    </div>
  );
}
