import { getIndexData } from "@/actions/server-actions";

export default async function Hero() {
  const { aboutData } = await getIndexData();

  console.log(aboutData);
  return (
    <section className="pt-16 md:pt-28">
      <Title aboutData={aboutData} />
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
      <div className="w-full md:w-[50%] pt-4">
        <p className="text-[1.7rem] leading-9 tracking-[0.02em]">
          {aboutData.personalStatement}
        </p>
      </div>
    </div>
  );
}
