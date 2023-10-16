import React, { Suspense } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

import { PageWrapper } from "@/components/ViewWrappers/ViewWrappers";
import HorizontalDivider from "@/components/HorizontalDivider";
import FooterLinks from "@/components/FooterLinks";
import { routes } from "@/data/routes";

const Footer = () => {
  let homeRoute;

  homeRoute = routes.find((route) => route.name === "Home");

  if (!homeRoute) {
    homeRoute = {
      name: "Home",
      path: "/",
    };
  }

  return (
    <footer className={styles.footer}>
      <PageWrapper>
        <HorizontalDivider />
        <div className={styles.footerInside}>
          <div className={styles.logoWrapper}>
            <Link href={homeRoute.path}>
              Chike <br /> Nwankwo
            </Link>
          </div>
          {/* @ts-expect-error Server Component */}
          <FooterLinks />
        </div>
      </PageWrapper>
    </footer>
  );
};

export default Footer;
