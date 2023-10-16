import React, { use } from "react";
import Link from "next/link";
import styles from "./FooterLinks.module.css";
import axios from "axios";
import API_Routes from "@/utils/APIRoutes";
import { MainData } from "@/types/global";

async function getRoutes() {
  try {
    const res = await axios.get(API_Routes.getRoute("appData"));
    return res.data.data;
  } catch (error) {
    console.log(error);
    return;
  }
}

const FooterLinks = async () => {
  const data: MainData = await getRoutes();

  if (!data) {
    return <div>Loading...</div>;
  }

  const routes = data.routes;
  const socialLinks = data.socialLinks;

  return (
    <div className={styles.wrapper}>
      {!!routes && (
        <ul className={styles.list} role="list">
          {routes.map((route) => {
            if (route.footer === false) return;
            return (
              <li className={styles.route} key={route.name}>
                <Link
                  className={styles.styledLink}
                  href={route.path}
                  role="link"
                >
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {!!socialLinks && (
        <ul className={styles.list} role="list">
          {socialLinks.map((link) => (
            <li className={styles.route} key={link.name}>
              <Link
                className={styles.styledLink}
                href={link.path}
                target="_blank"
                role="link"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FooterLinks;
