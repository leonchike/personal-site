import React from "react";
import axios from "axios";
import API_Routes from "@/utils/APIRoutes";
import Section from "@/components/HomeComponents/Section";

async function getData() {
  try {
    const res = await axios.get(API_Routes.getRoute("homeSections"));
    return res.data.data;
  } catch (error) {
    console.log(error);
    return;
  }
}

const HomeSections = async () => {
  const data = await getData();

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
