import React from "react";
import styled from "styled-components";
import Icon from "@/components/Icon";
import styles from "./DownloadButton.module.css";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const DownloadButton = ({ children, ...props }: Props) => {
  return (
    <button className={styles.button} {...props}>
      {children}{" "}
      <div className={styles.iconWrapper}>
        <Icon id="arrowDown" size="1.2rem" strokeWidth="2px" />
      </div>
    </button>
  );
};

export default DownloadButton;
