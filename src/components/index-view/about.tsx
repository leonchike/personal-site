import { getIndexData } from "@/actions/server-actions";
import { AboutData } from "@/utils/types";

export default async function AboutSection() {
  const { aboutData } = await getIndexData();

  return (
    <section className="py-24 md:py-32 space-y-12">
      <Statement statement={aboutData.summaryStatement} />
      <Contact data={aboutData} />
    </section>
  );
}

function Statement({
  statement,
}: {
  statement: AboutData["summaryStatement"];
}) {
  return (
    <div className="space-y-2">
      <div className="font-semibold tracking-wider">About me</div>
      <div className="max-w-[700px] text-[0.95rem]">{statement}</div>
    </div>
  );
}

function Contact({ data }: { data: AboutData }) {
  return (
    <div className="space-y-2">
      <div className="font-semibold tracking-wider">Contact</div>
      <div className="text-[0.95rem]">
        <div>{data.contactEmail}</div>
        <div>{data.contactPhone}</div>
        <div>{data.contactLocation}</div>
      </div>
      <DownloadResume url={data.resumeURL} />
    </div>
  );
}

function DownloadResume({ url }: { url: AboutData["resumeURL"] }) {
  return (
    <div className="pt-4">
      <a
        className="text-[0.95rem] underline hover:no-underline"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        Download Resume (PDF)
      </a>
    </div>
  );
}
