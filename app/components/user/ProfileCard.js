import React, { Fragment, useState } from "react";
import styles from "../../styles/modules/Profile.module.scss";
import { Dropdown, Modal, message } from "antd";
import { useRouter } from "next/router";

export default function ProfileCard() {
  const router = useRouter();
  const [isModalOpen, setModalStatus] = useState(false);

  const openModal = (status) => {
    setModalStatus(status);
  };

  const success = () => {
    message.success("Your referral link copied");
  };
  const goToEdit = () => {
    router.push("/profile/edit");
  };

  const giftModal = () => {
    return (
      <Modal
        width={360}
        centered={true}
        className={styles.gift_modal}
        visible={isModalOpen}
        footer={null}
        closable={false}
      >
        <div className={styles.modal_header}>
          <div className={styles.close} onClick={() => setModalStatus(false)}>
            <img src="/icons/close.svg" />
          </div>
          <div className={styles.title}>
            <span>Share profile</span>
          </div>
        </div>
        <div className={styles.inputs_container}>
          <div className={styles.input_wrapper}>
            <span>Your referral link:</span>
            <div className={styles.custom_input}>
              <input value="https://glorich/user/iamAndrew" disabled={true} />
              <button className={styles.copy}>
                <img src="/icons/copy.svg" onClick={() => success()} />
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  const TripleDotItems = () => {
    return (
      <div className={styles.dropdown_wrapper}>
        <div className={styles.dropdown_items} onClick={goToEdit}>
          <span className={styles.dropdown_icon}>
            <img src="/icons/edit-gray.svg" />
          </span>
          <span className={styles.dropdown_text}>Edit</span>
        </div>
        <div
          className={styles.dropdown_items}
          onClick={() => setModalStatus(true)}
        >
          <span className={styles.dropdown_icon}>
            <img src="/icons/share-gray.svg" />
          </span>
          <span className={styles.dropdown_text}>Share</span>
        </div>
        <div className={styles.dropdown_items}>
          <span className={styles.dropdown_text + " " + styles.logout}>
            Log out
          </span>
        </div>
      </div>
    );
  };

  const UserContainer = () => {
    return (
      <Fragment>
        <div className={styles.user_image}>
          <img className={styles.user} src="/images/user.png" />
          <div className={styles.rank_wrapper}>
            <img src="/icons/rank-hexagon.svg" />
            <span>999</span>
          </div>
        </div>
        <div className={styles.user_name}>iamAndrew</div>
        <div className={styles.user_full_name}>Andrew Nguyen</div>
      </Fragment>
    );
  };

  return (
    <div className={styles.profile_card}>
      <div className={styles.container}>
        <div className={styles.items}>
          <div className={styles.left_item}>
            <Dropdown overlay={TripleDotItems} placement="bottomLeft">
              <div className={styles.dropdown_trigger}>
                <img src="/icons/tripple-dot.svg" />
              </div>
            </Dropdown>
          </div>
          <div className={styles.middle_items}>{UserContainer()}</div>
        </div>
      </div>
      {giftModal()}
    </div>
  );
}
