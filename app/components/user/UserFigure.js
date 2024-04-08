import React from "react";
import styles from "../../styles/modules/User.module.scss";
import { Dropdown } from "antd";

export default function UserFigure() {
  const profileItem = () => {
    return (
      <div className={styles.dropdown_wrapper}>
        <div className={styles.dropdown_items}>
          <span className={styles.dropdown_text}>View Profile</span>
        </div>
        <div className={styles.dropdown_items}>
          <span className={styles.dropdown_text + ' ' + styles.logout}>Log out</span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.user_figure}>
      <div className={styles.icon}>
        <img src="/icons/plus-green.svg" />
      </div>
      <div className={styles.price}>
        <span className={"p1"}>$555</span>
      </div>
      <div className={styles.separator}>
        <span>|</span>
      </div>
      <div className={styles.user_image}>
        <Dropdown overlay={profileItem} placement="bottomLeft">
          <div className={styles.dropdown_trigger}>
            <img src="/images/user.png" />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
