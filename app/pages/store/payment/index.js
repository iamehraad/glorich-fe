import React from "react";
import styles from "../../../styles/modules/Store.module.scss";
import Authenticated from "../../../components/layouts/Authenticated";
import BackButton from "../../../components/tools/BackButton";
import PaymentCard from "../../../components/store/PaymentCard";


export default function index() {
  return (
    <Authenticated>
      <div className={styles.payment_wrapper}>
        <div className={styles.payment_container}>
          <div className={styles.back_wrapper}>
            <BackButton path={"/store"} />
          </div>
          <PaymentCard />
        </div>
      </div>
    </Authenticated>
  );
}
