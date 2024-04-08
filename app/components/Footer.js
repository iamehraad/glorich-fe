import React from "react";
import styles from "../styles/modules/Footer.module.scss";
import { Row, Col } from "antd";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contents}>
        <Row justify="space-between">
          <Col span={16}>
            <div className={styles.items_left}>
              <span className={styles.links}>About</span>
              <span className={styles.links + " " + styles.has_space}>
                How it works
              </span>
              <span className={styles.links}>Support</span>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.items_right}>
              <span className={styles.links}>Privacy</span>
              <span className={styles.links + " " + styles.has_space}>
                Terms
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className={styles.links + ' ' + styles.copy_right}>Copyright © 2020 by Glorich</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
