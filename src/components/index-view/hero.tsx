import { getIndexData } from "@/actions/server-actions";
import ROUTES, { getSamePageAnchorLink } from "@/utils/routes";
import { ArrowDownIcon } from "@/components/ui/custom-icons";

export default async function Hero() {
  const { aboutData } = await getIndexData();

  if (!aboutData) return null;

  return (
    <section className="pt-12 pb-8 md:pt-24 md:pb-18">
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
      <h2 className="">{aboutData.currentPosition}</h2>
      <div className="w-full md:w-[75vw] xl:w-[50vw] pt-4">
        <p className="text-[1.2rem] md:text-[1.4rem] md:leading-9 tracking-[0.02em] font-[375] max-w-[62rem]">
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
    { label: "About", href: getSamePageAnchorLink(ROUTES.HOME_ABOUT_SECTION) },
  ];

  return (
    <div className="pt-6 flex flex-col gap-3 text-[rgb(20,20,20)]">
      {LINKS.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="inline-flex items-center gap-1 border-b border-current hover:border-transparent transition-colors duration-300 w-min h-[1.15rem] text-sm"
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
