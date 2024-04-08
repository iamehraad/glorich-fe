import React, { Fragment, useState } from "react";
import HomePage from "../../components/layouts/HomePage";
import HeaderBlock from "../../components/HeaderBlock";
import styles from "../../styles/modules/HomePage.module.scss";
import CustomButton from "../../components/tools/Button";
import { Row, Col } from "antd";
import { useRouter } from "next/router";
import ScoreBoardTable from "../../components/tables/ScoreBoardTable";
import UserCard from "../../components/user/UserCard";

export default function index() {
  const [isUserLoggedIn, setLoginStatus] = useState(false);
  const router = useRouter();

  const gotToSignIn = () => {
    setLoginStatus(true);
    // router.push("/authentication");
  };

  const HeaderBlockContent = () => {
    if (isUserLoggedIn) {
      return (
        <div className={styles.user_card_wrapper}>
          <UserCard />
        </div>
      )
    } else {
      return (
        <Fragment>
          <img src="/images/not-authenticated-text.svg" />
          <CustomButton
            style="not_authenticated_header_block"
            onClick={gotToSignIn}
          >
            Sign up now
          </CustomButton>
        </Fragment>
      );
    }
  };

  return (
    <HomePage>
      <div className={styles.header_block}>
        <Row gutter={12}>
          <Col span={24}>
            <HeaderBlock isSignedIn={isUserLoggedIn}>
              <div className={styles.block_wrapper}>
                {HeaderBlockContent()}
              </div>
            </HeaderBlock>
          </Col>
        </Row>
      </div>
      <div className={styles.scoreboard}>
        <Row justify="center">
          <Col span={24}>
            <ScoreBoardTable style="home_page" />
          </Col>
        </Row>
      </div>
    </HomePage>
  );
}
