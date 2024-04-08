import React from "react";
import styles from "../../styles/modules/Store.module.scss";
import { Row, Col } from "antd";
import CustomButton from "../tools/Button";

export default function FinalPaymentCard() {
  return (
    <div className={styles.final_card}>
      <div className={styles.final_container}>
        <div className={styles.title}>
          <img src="/icons/mastercard.svg" />
          <h1 className={"h1"}>PAY WITH MASTERCARD</h1>
        </div>
        <div className={styles.information_wrapper}>
          <div className={styles.information}>
            <span>Plan:</span>
            <p>Get the next better rank</p>
          </div>
          <div className={styles.information}>
            <span>USD Amount:</span>
            <p>$230</p>
          </div>
        </div>
        <div className={styles.button_wrapper}>
          <div>
            <CustomButton style="edit_profile">
              <span className={styles.purchase_button}>Purchase $230</span>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
