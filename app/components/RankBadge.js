import React from "react";
import styles from "../styles/modules/Badge.module.scss";

export default function RankBadge({ rank }) {
  return (
    <div className={styles.badge_wrapper}>
      <div className={styles.hexagon + ' ' + styles[`rank-${rank}`]}></div>
      <span className={styles.rank + ' ' + styles[`rank-number-${rank}`]}>{rank}</span>
    </div>
  );
}
