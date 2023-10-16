import React from "react";
import Section from "@/components/HomeComponents/Section";
import { getHomeSectionData } from "@/lib/getAppData";
import { Item } from "@/types/global";

async function getData() {
  const data = getHomeSectionData();

  if (!data) {
    return null;
  }

  return data;
}

interface Data {
  teams: Item[];
  projects: Item[];
  likes: Item[];
}

const HomeSections = async () => {
  const data: Data | null = await getData();

  if (!data) {
    return <div>Loading...</div>;
  }

  const teamsData = data.teams;
  const projectsData = data.projects;
  const likesData = data.likes;

  return (
    <div>
      <Section sectionTitle="teams" path="/teams" data={teamsData} />
      <Section sectionTitle="projects" path="/projects" data={projectsData} />
      <Section sectionTitle="likes" path="/likes" data={likesData} />
    </div>
  );
};

export default HomeSections;
