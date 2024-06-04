/* eslint-disable @next/next/no-img-element */
import { getIndexData } from "@/actions/server-actions";
import { AboutData } from "@/utils/types";
import ROUTES, { getSamePageSectionId } from "@/utils/routes";
import ObfuscatedEmail from "./obfuscated-email";

export default async function AboutSection() {
  const { aboutData } = await getIndexData();

  return (
    <section
      id={getSamePageSectionId(ROUTES.HOME_ABOUT_SECTION)}
      className="py-24 md:py-32 space-y-12"
    >
      <div className="space-y-4">
        <div className="flex justify-center md:justify-start">
          <ProfileImage url={aboutData.profilePictureURL} />
        </div>
        <Statement
          statement={aboutData.summaryStatement}
          name={aboutData.name}
        />
      </div>
      <Contact data={aboutData} />
    </section>
  );
}

function ProfileImage({ url }: { url: string }) {
  return (
    <div className="w-48 h-48 rounded-full overflow-hidden">
      <img
        src={url}
        alt="Profile picture"
        className="w-full h-full object-cover transform scale-125 transition-transform duration-500 ease-in-out hover:scale-100"
      />
    </div>
  );
}

function Statement({
  statement,
  name,
}: {
  statement: AboutData["summaryStatement"];
  name: AboutData["name"];
}) {
  return (
    <div className="space-y-2">
      <div className="font-[550] tracking-wider">{name}</div>
      <div className="max-w-[700px] text-[0.95rem] leading-[1.45rem] mb-4">
        {statement.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function Contact({ data }: { data: AboutData }) {
  return (
    <div className="space-y-2">
      <div className="font-[550] tracking-wider">Contact</div>
      <div className="text-[0.95rem]">
        <div>
          <ObfuscatedEmail email={data.contactEmail} />
        </div>
        {/* <div>{data.contactPhone}</div> */}
        <div>{data.contactLocation}</div>
        <div>
          <a
            href={data.linkedInURL}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
        </div>
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
