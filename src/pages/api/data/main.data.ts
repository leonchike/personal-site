/*
  Main data file for the site.
*/

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  routes: [
    { id: "home", name: "Home", path: "/", pageType: "blog", footer: false },
    {
      id: "teams",
      name: "Teams",
      path: "/teams",
      pageType: "blog",
      footer: true,
    },
    {
      id: "projects",
      name: "Projects",
      path: "/projects",
      pageType: "blog",
      footer: true,
    },
    {
      id: "writing",
      name: "Writing",
      path: "/writing",
      pageType: "blog",
      footer: true,
    },
    {
      id: "travel",
      name: "Travel",
      path: "/travel",
      pageType: "travel",
      footer: true,
    },
  ],
  socialLinks: [
    { name: "Twitter", path: "https://twitter.com/l__e__o__n_" },
    { name: "GitHub", path: "https://github.com/leonchike" },
    { name: "LinkedIn", path: "https://www.linkedin.com/in/chike-nwankwo/" },
  ],
  about: {
    name: "Chike Nwankwo",
    tags: [
      "Management consultant",
      "MBA",
      "Computer engineer",
      "Product manager",
      "Supply-chain manager",
      "User-experience designer",
      "NextJS",
      "TypeScript",
      "Python",
      "Statistical Analytics",
    ],
  },
  sections: {
    teams: {
      live: true,
    },
    projects: {
      live: true,
    },
  },
};
