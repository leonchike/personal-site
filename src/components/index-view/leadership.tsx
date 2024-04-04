import ROUTES, { getSamePageSectionId } from "@/utils/routes";

export default async function LeadershipSection() {
  return (
    <section
      id={getSamePageSectionId(ROUTES.HOME_LEADERSHIP_SECTION)}
      className="h-[2000px] bg-blue-100"
    ></section>
  );
}
