import React from "react";
import styles from "../../styles/modules/Tables.module.scss";
import RankBadge from "../RankBadge";

export default function ScoreBoardTable({ style }) {
  const users = [
    { rank: 1, name: "Hudson Carter", score: "$1,850" },
    { rank: 2, name: "Andrew Nguyen", score: "$850" },
    { rank: 3, name: "William Thomas", score: "$650" },
    { rank: 4, name: "Neymar JR", score: "$550" },
    { rank: 5, name: "CR7", score: "$450" },
    { rank: 6, name: "Josiah Roberts", score: "$350" },
  ];

  const usersList = () => {
    return users.map((user) => {
      return (
        <div className={styles.table_body} key={user.score}>
          <div className={styles.rank}>
            <RankBadge rank={user.rank} />
          </div>
          <div className={styles.user_image}>
            <img src="/images/user.png" />
          </div>
          <div className={styles.username}>
            <span>{user.name}</span>
          </div>
          <div className={styles.score}>
            <span>{user.score}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles[style]}>
      <div className={styles.table_headers}>
        <span className={styles.rank}>rank</span>
        <span className={styles.user_image}></span>
        <span>username</span>
        <span className={styles.score}>score</span>
      </div>
      {usersList()}
    </div>
  );
}
