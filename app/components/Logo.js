import React from "react";
import styles from "../styles/modules/Logo.module.scss";

export default function Logo({ style = "authentication" }) {
  return (
    <div className={styles.wrapper + " " + styles[style]}>
      <img src="/images/logo.png" />
      <div>
        <span className={styles.glo}>GLO</span>
        <span className={styles.rich}>RICH</span>
      </div>
    </div>
  );
}
