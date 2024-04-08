import React from "react";
import styles from "../../../../styles/modules/Store.module.scss";
import Authenticated from "../../../../components/layouts/Authenticated";
import BackButton from "../../../../components/tools/BackButton";
import FinalPaymentCard from "../../../../components/store/FinalPaymentCard";


export default function index() {
  return (
    <Authenticated>
      <div className={styles.final_wrapper}>
        <div className={styles.final_container}>
          <div className={styles.back_wrapper}>
            <BackButton path={"/store/payment"} />
          </div>
          <FinalPaymentCard />
        </div>
      </div>
    </Authenticated>
  );
}
