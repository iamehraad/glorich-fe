import React, { useState } from "react";
import styles from "../../styles/modules/Navigation.module.scss";
import UserFigure from "../user/UserFigure";
import Logo from "../Logo";
import Searchbar from "../tools/Searchbar";
import { Row, Col } from "antd";
import CustomButton from "../tools/Button";
import { useRouter } from "next/router";

export default function MainNavigation() {
  const router = useRouter();
  const [phrase, setPhrase] = useState("");
  const [isUserLoggedIn, setLoginStatus] = useState(false);

  const phrasseUpdated = (phrase) => {
    setPhrase(phrase);
    setLoginStatus(true);
  };

  const gotToSignIn = () => {
    router.push("/authentication");
  };

  const rightSideItems = () => {
    if (isUserLoggedIn) {
      return (
        <div className={styles.user_figure}>
          <UserFigure />
        </div>
      );
    } else {
      return (
        <div className={styles.buttons}>
          <CustomButton
            type="text"
            style="navigation-sign-in"
            onClick={gotToSignIn}
          >
            Sign in
          </CustomButton>
          <span id={styles.separator}></span>
          <CustomButton style="navigation-sign-up" onClick={gotToSignIn}>
            Sign up
          </CustomButton>
        </div>
      );
    }
  };

  return (
    <div className={styles.navigation_wrapper}>
      <Row>
        <Col
          xs={{ order: 0, span: 12 }}
          sm={{ order: 0, span: 12 }}
          md={{ order: 0, span: 6 }}
          lg={{ order: 0, span: 6 }}
        >
          <div className={styles.logo}>
            <Logo style={"not_authenticated_nav"} />
          </div>
        </Col>
        <Col
          xs={{ order: 3, span: 24 }}
          sm={{ order: 3, span: 24 }}
          md={{ order: 1, span: 12 }}
          lg={{ order: 1, span: 12 }}
        >
          <div className={styles.searchbar}>
            <Searchbar
              onChange={phrasseUpdated}
              style="navigation_searchbar"
              placeholder="Search in glorich"
            />
          </div>
        </Col>
        <Col
          xs={{ order: 1, span: 12 }}
          sm={{ order: 1, span: 12 }}
          md={{ order: 2, span: 6 }}
          lg={{ order: 1, span: 6 }}
        >
          {rightSideItems()}
        </Col>
      </Row>
    </div>
  );
}
