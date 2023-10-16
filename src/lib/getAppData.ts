import teamsData from "@/data/teams.data";
import projectsData from "@/data/projects.data";
import likesData from "@/data/likes.data";
import appData from "@/data/main.data";

export function getAppData() {
  return appData;
}

export function getHomeSectionData() {
  let data = {
    teams: teamsData,
    projects: projectsData,
    likes: likesData,
  };

  return data;
}
