const ROUTES = {
  HOME: "/",
  HOME_WORK_SECTION: "/#work",
  HOME_LEADERSHIP_SECTION: "/#leadership",
  HOME_STRATEGY_SECTION: "/#strategy",
  HOME_COLLABORATION_SECTION: "/#collaboration",
  HOME_MORE_SECTION: "/#more",
  HOME_ABOUT_SECTION: "/#about",
};

export default ROUTES;

export const socialLinks = [
  { name: "Twitter", path: "https://twitter.com/leonchike" },
  { name: "GitHub", path: "https://github.com/leonchike" },
  { name: "LinkedIn", path: "https://www.linkedin.com/in/leonchike/" },
];

export function getSamePageAnchorLink(href: string) {
  // replace the "/" with an empty string
  return href.replace("/", "");
}

export function getSamePageSectionId(href: string) {
  // replace the "/#" with an empty string
  return href.replace("/#", "");
}
