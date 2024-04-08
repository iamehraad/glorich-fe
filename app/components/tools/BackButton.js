import React from "react";
import styles from "../../styles/modules/Button.module.scss";
import { useRouter } from "next/router";

export default function BackButton({ path }) {
  const router = useRouter();

  const goToProfile = () => {
    router.push(path);
  };
  return (
    <div className={styles.back_button} onClick={goToProfile}>
      <div>
        <img src="/icons/arrow-left-white.svg" />
        Back
      </div>
    </div>
  );
}
