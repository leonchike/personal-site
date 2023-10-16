import React from "react";
import Link from "next/link";
import styles from "./FooterLinks.module.css";
import { MainData } from "@/types/global";
import { getAppData } from "@/lib/getAppData";

const FooterLinks = async () => {
  const data: MainData = getAppData();

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
