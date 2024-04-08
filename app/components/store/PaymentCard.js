import React from "react";
import styles from "../../styles/modules/Store.module.scss";
import { Row, Col } from "antd";

export default function PaymentCard() {
  const PaymentMethods = () => {
    return (
      <Row gutter={[{sm: 40, xs: 15}, {sm: 61, xs: 41}]} justify="center">
        <Col className="gutter-row" xs={12}>
          <div className={styles.option_card}>
            <div className={styles.image_wrapper}>
              <img src="/icons/bitcoin.svg" />
            </div>
            <p>BITCOIN (BTC)</p>
          </div>
        </Col>
        <Col className="gutter-row" xs={12}>
          <div className={styles.option_card}>
            <div className={styles.image_wrapper}>
              <img src="/icons/ethereum.svg" />
            </div>
            <p>Ethereum (ETH)</p>
          </div>
        </Col>
        <Col className="gutter-row" xs={12}>
          <div className={styles.option_card}>
            <div className={styles.image_wrapper}>
              <img src="/icons/mastercard.svg" />
            </div>
            <p>MasterCard</p>
          </div>
        </Col>
        <Col className="gutter-row" xs={12}>
          <div className={styles.option_card}>
            <div className={styles.image_wrapper}>
              <img src="/icons/visa.svg" />
            </div>
            <p>Visacard</p>
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <div className={styles.payment_card}>
      <div className={styles.payment_container}>
        <div className={styles.title}>
          <h1 className={"h1"}>Choose a Payment options</h1>
        </div>
        <div className={styles.options}>{PaymentMethods()}</div>
      </div>
    </div>
  );
}
