import React from "react";
import styles from "./HomeHeader.module.css";
import { MainData } from "@/types/global";
import { getAppData } from "@/lib/getAppData";

// Components
import Tags from "@/components/Tags";
import Spacer from "@/components/Spacer";
import HomeAbout from "@/components/HomeComponents/HomeAbout";
import DownloadResume from "@/components/DownloadResume";

async function getData() {
  const data: MainData = getAppData();

  if (!data) {
    return null;
  }

  return data;
}

const HomeHeader = async () => {
  const data: MainData | null = await getData();

  if (!data) {
    return <div>Loading...</div>;
  }

  const tags = data.about.tags;

  return (
    <header className={styles.wrapper}>
      <h1 className={styles.name}>
        Chike <br /> Nwankwo
      </h1>
      <Spacer height="2rem" />
      <div>
        <HomeAbout />
      </div>
      <Spacer height="1.5rem" />
      {!!tags && <Tags tags={tags} />}
      <Spacer height="3rem" />
      <DownloadResume url={data.resume.url} />
    </header>
  );
};

export default HomeHeader;
