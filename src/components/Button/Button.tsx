import React, { FC, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

import { QUERIES } from "@/styles/styleConstants";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <button className={styles.button} {...props}>
    <span className={styles.span}>{children}</span>
  </button>
);

export default Button;
