import { Fragment } from "react";
import styles from "../../styles/modules/AuthenticatedLayout.module.scss";
import MainNavigation from "../navigations/MainNavigation";
import Footer from "../Footer";


export default function Authenticated({ children }) {
  return (
    <Fragment>
      <div className={styles.authenticated_wrapper}>
        <div className={styles.navigation}>
          <MainNavigation />
        </div>
        <div className={styles.authenticated_body}>{children}</div>
        <div className={styles.footer_handler}>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}
