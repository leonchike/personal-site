import React from "react";
import styles from "./HomeHeader.module.css";
import { MainData } from "@/types/global";
import axios from "axios";
import API_Routes from "@/utils/APIRoutes";

// Components
import Tags from "@/components/Tags";
import Spacer from "@/components/Spacer";
import HomeAbout from "@/components/HomeComponents/HomeAbout";
// import DownloadResume from "@/components/DownloadResume";

async function getData() {
  try {
    const res = await axios.get(API_Routes.getRoute("appData"));
    return res.data.data;
  } catch (error) {
    console.log(error);
    return;
  }
}

const HomeHeader = async () => {
  const data: MainData = await getData();

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
      {/* <DownloadResume /> */}
    </header>
  );
};

export default HomeHeader;
