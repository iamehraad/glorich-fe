import React, { Fragment } from "react";
import styles from "../../styles/modules/HomePage.module.scss";
import MainNavigation from "../navigations/MainNavigation";
import Footer from "../Footer";

export default function HomePage({ children }) {
  return (
    <Fragment>
      <div className={styles.not_authenticated_wrapper}>
        <div className={styles.navigation}>
          <MainNavigation />
        </div>
        <div className={styles.not_authenticated_body}>{children}</div>
        <div className={styles.footer_handler}>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}
