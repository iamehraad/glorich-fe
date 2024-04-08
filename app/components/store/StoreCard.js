import React from "react";
import styles from "../../styles/modules/Store.module.scss";
import { Row, Col } from "antd";

export default function StoreCard() {
  const OptionCards = () => {
    return (
      <Row gutter={[15, 15]} justify="center">
        <Col className="gutter-row" xs={24} sm={12} lg={6}>
          <div className={styles.option_card + " " + styles.get_better}>
            <h3 className={styles.title + " h3"}>
              Get the <br /> next better <br /> rank
            </h3>
            <div>
              <img src="/icons/get-better.svg" />
            </div>
          </div>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} lg={6}>
          <div className={styles.option_card + " " + styles.top_twenty}>
            <h3 className={styles.title + " h3"}>
              Get in <br /> top 20 rich
            </h3>
            <div>
              <img src="/icons/top-ten.svg" />
            </div>
          </div>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} lg={6}>
          <div className={styles.option_card + " " + styles.top_ten}>
            <h3 className={styles.title + " h3"}>
              Get in <br /> top 10 rich
            </h3>
            <div>
              <img src="/icons/top-ten.svg" />
            </div>
          </div>
        </Col>
        <Col className="gutter-row" xs={24} sm={12} lg={6}>
          <div className={styles.option_card + " " + styles.richest}>
            <h3 className={styles.title + " h3"}>Be richest</h3>
            <div>
              <img src="/icons/richest.svg" />
            </div>
          </div>
        </Col>
      </Row>
    );
  };

  const CreditCards = () => {
    return (
      <Row gutter={[15, 15]}>
        <Col className="gutter-row" xs={12} sm={8} lg={6}>
          <div className={styles.credit_card}>
            <img src="/images/one-dollar-credit.png" />
          </div>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} lg={6}>
          <div className={styles.credit_card}>
            <img src="/images/five-dollar-credit.png" />
          </div>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} lg={6}>
          <div className={styles.credit_card}>
            <img src="/images/ten-dollar-credit.png" />
          </div>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} lg={6}>
          <div className={styles.credit_card}>
            <img src="/images/twenty-dollar-credit.png" />
          </div>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} lg={6}>
          <div className={styles.credit_card}>
            <img src="/images/fifty-dollar-credit.png" />
          </div>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} lg={6}>
          <div className={styles.credit_card}>
            <img src="/images/hundred-dollar-credit.png" />
          </div>
        </Col>
        <Col className="gutter-row" xs={12} sm={8} lg={6}>
          <div className={styles.credit_card}>
            <img src="/images/thousand-dollar-credit.png" />
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <div className={styles.store_card}>
      <div className={styles.store_container}>
        <div className={styles.title}>
          <h1 className={"h1"}>STORE</h1>
        </div>
        <div className={styles.options}>
          <div className={styles.label}>
            <p>First Option</p>
          </div>
          <div className={styles.cards}>{OptionCards()}</div>
        </div>
        <div className={styles.credits}>
          <div className={styles.label}>
            <p>Credit Cards</p>
          </div>
          <div className={styles.cards}>{CreditCards()}</div>
        </div>
      </div>
    </div>
  );
}
