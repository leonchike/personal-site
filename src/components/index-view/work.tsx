import ROUTES, { getSamePageSectionId } from "@/utils/routes";

export default async function WorkSection() {
  console.log(getSamePageSectionId(ROUTES.HOME_WORK_SECTION));

  return (
    <section
      id={getSamePageSectionId(ROUTES.HOME_WORK_SECTION)}
      className="h-[2000px] bg-green-100"
    ></section>
  );
}
