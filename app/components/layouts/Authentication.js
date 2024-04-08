import React, { Fragment } from "react";
import styles from "../../styles/modules/Authentication.module.scss";
import { Row, Col } from "antd";
import Logo from "../Logo";

export default function Authentication({ children }) {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div className={styles.auth_container}>
          <Row>
            <Col md={12} className="hide-on-mobile">
              <img id={styles.auth_image} src="/images/authentication.png" />
            </Col>
            <Col md={12} className={styles.form_container}>
              <div className={styles.logo}>
                <Logo />
              </div>
              <div className={styles.form}>{children}</div>
              <div className={styles.footer}>
                <p className={"label " + styles.label}>
                  By logging in or registering with Glorich you agree to the{" "}
                  <a href="/">terms and conditions</a> of use of Glorich’s site
                  services and its <a href="/">privacy policy</a>.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
}
