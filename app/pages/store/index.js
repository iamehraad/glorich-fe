import React from "react";
import styles from "../../styles/modules/Store.module.scss";
import Authenticated from "../../components/layouts/Authenticated";
import BackButton from "../../components/tools/BackButton";
import StoreCard from "../../components/store/StoreCard";

export default function index() {
  return (
    <Authenticated>
      <div className={styles.store_wrapper}>
        <div className={styles.store_container}>
          <div className={styles.back_wrapper}>
            <BackButton path={"/home"} />
          </div>
          <StoreCard />
        </div>
      </div>
    </Authenticated>
  );
}
