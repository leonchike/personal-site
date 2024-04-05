/* eslint-disable @next/next/no-img-element */
import ROUTES, { getSamePageSectionId } from "@/utils/routes";
import { SectionTitle } from "./reusable-index-components";
import { WorkItemType } from "@/utils/types";
import { getIndexData } from "@/actions/server-actions";

export default async function WorkSection() {
  const { workData } = await getIndexData();

  if (!workData) return null;

  return (
    <section
      id={getSamePageSectionId(ROUTES.HOME_WORK_SECTION)}
      className="pt-8 md:pt-10"
    >
      <Heading />
      <div className="flex flex-col gap-6">
        {workData.map((item, index) => (
          <WorkItem key={index} data={item} />
        ))}
      </div>
    </section>
  );
}

function Heading() {
  return (
    <div>
      <SectionTitle>work</SectionTitle>
    </div>
  );
}

function WorkItem({ data }: { data: WorkItemType }) {
  console.log(data);

  return (
    <article className="space-y-8 md:space-y-12 pb-16 md:pb-18">
      <WorkItemDescription data={data} />
      <WorkItemVisuals data={data} />
    </article>
  );
}

function WorkItemDescription({ data }: { data: WorkItemType }) {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-4 lg:gap-8 border-t-[1px] border-primary-dark w-full pt-2 md:pt-3">
      <div className="lg:max-w-[33%] space-y-1">
        <h3 className="font-semibold tracking-wide">{data.articleTitle}</h3>
        <p className="text-[0.9rem] whitespace-pre-wrap leading-[1.25rem]">
          {data.articleDescription}
        </p>
      </div>
      <div className="lg:max-w-[17%] space-y-1">
        <h3 className="font-semibold">Role</h3>
        <p className="text-[0.9rem] flex flex-col">
          {data.role.map((role, index) => (
            <span key={index}>{role}</span>
          ))}
        </p>
      </div>
      {data.year && (
        <div className="lg:max-w-[17%] space-y-1">
          <h3 className="font-semibold">Year</h3>
          <p className="text-[0.9rem]">{data.year}</p>
        </div>
      )}
    </div>
  );
}

function WorkItemVisuals({
  data,
  minItemWidth = "200px",
  maxItemWidth = "400px",
}: {
  data: WorkItemType;
  minItemWidth?: string;
  maxItemWidth?: string;
}) {
  if (!data.visuals) return null;

  if (data.visuals.length === 0) return null;

  if (data.displayType === "multi-images")
    return <MultipleAssets data={data} />;

  if (data.displayType === "single-image") return <SingleImage data={data} />;

  // return (
  //   <div className="flex justify-center">
  //     <div className=" max-w-[1600px] w-full grid grid-cols-[repeat(auto-fill,minmax(min(480px,100%),1fr))] gap-x-4 gap-y-6 w-content">
  //       {data.visuals.map((visual, index) => (
  //         <div key={index} className="flex flex-col items-center">
  //           <div className="flex flex-col items-center">
  //             <img
  //               src={visual.url}
  //               alt={visual.alt}
  //               className="w-[70%] md:w-[50%] lg:w-[70%] xl:w-[80%] h-auto"
  //             />
  //           </div>
  //           <div className="py-8">
  //             <p className="text-center px-4 max-w-[380px] text-[0.92rem]">
  //               {visual.description}
  //             </p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return null;
}

function MultipleAssets({ data }: { data: WorkItemType }) {
  return (
    <div className="flex justify-center">
      <div className=" max-w-[1600px] w-full grid grid-cols-[repeat(auto-fill,minmax(min(480px,100%),1fr))] gap-x-4 gap-y-6 w-content">
        {data.visuals.map((visual, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <img
                src={visual.url}
                alt={visual.alt}
                className="w-[70%] md:w-[50%] lg:w-[70%] xl:w-[80%] h-auto"
              />
            </div>
            <div className="py-8">
              <p className="text-center px-4 max-w-[380px] text-[0.92rem]">
                {visual.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SingleImage({ data }: { data: WorkItemType }) {
  const bgColor = data.visuals[0]?.bgColor;
  const largeImage = data.visuals[0].url;
  const smallImage = data.visuals[0].smallurl;

  return (
    <div className={`flex justify-center ${bgColor && `bg-[${bgColor}]`}`}>
      <div className="flex flex-col items-center">
        <img
          src={smallImage}
          alt={data.visuals[0].alt}
          className="w-full lg:hidden"
        />
        <img
          src={largeImage}
          alt={data.visuals[0].alt}
          className="hidden lg:block lg:w-full"
        />
        {data.visuals[0].description && (
          <div className="py-8">
            <p className="text-center px-4 max-w-[380px] text-[0.92rem]">
              {data.visuals[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
