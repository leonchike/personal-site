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
      id: "likes",
      name: "Likes",
      path: "/likes",
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
      "Management Consultant",
      "MBA",
      "Computer Engineer",
      "Technical Product Manager",
      "Supply-Chain Manager",
      "User-Experience Designer",
      "NextJS",
      "TypeScript",
      "Python",
      "Statistical Analytics",
    ],
  },
  sections: {
    teams: {
      live: true,
      subTitle: "Organizations I've had the pleasure to work and lead.",
    },
    projects: {
      live: true,
      subTitle: "Projects I've worked on both personal and for others.",
    },
    likes: {
      live: true,
      subTitle: "Places and things that have brought me joy.",
    },
  },
};
