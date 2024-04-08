import React from "react";
import styles from "../styles/modules/HeaderBlock.module.scss";

export default function HeaderBlock({ isSignedIn ,children }) {
  return <div className={isSignedIn ? styles.wrapperNoBackground : styles.wrapper}>{children}</div>;
}
