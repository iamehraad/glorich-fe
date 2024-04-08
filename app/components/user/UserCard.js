import React, { Fragment, useState } from "react";
import styles from "../../styles/modules/User.module.scss";
import CustomButton from "../tools/Button";
import { Dropdown, Modal, message } from "antd";

export default function UserCard() {
  const [isModalOpen, setModalStatus] = useState(false);

  const openModal = (status) => {
    setModalStatus(status);
  };

  const success = () => {
    message.success('Your referral link copied');
  };

  const TripleDotItems = () => {
    return (
      <div className={styles.dropdown_wrapper}>
        <div className={styles.dropdown_items}>
          <span className={styles.dropdown_icon}>
            <img src="/icons/edit-gray.svg" />
          </span>
          <span className={styles.dropdown_text}>Edit</span>
        </div>
        <div className={styles.dropdown_items}>
          <span className={styles.dropdown_icon}>
            <img src="/icons/share-gray.svg" />
          </span>
          <span className={styles.dropdown_text}>Share</span>
        </div>
      </div>
    );
  };

  const UserContainer = () => {
    return (
      <Fragment>
        <div className={styles.user_image}>
          <img className={styles.user} src="/images/user.png" />
          <img className={styles.medal} src="/icons/silver-badge-medal.svg" />
        </div>
        <div className={styles.user_name}>Andrew Nguyen</div>
        <div className={styles.user_value}>$555</div>
      </Fragment>
    );
  };

  const giftModal = () => {
    return (
      <Modal
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
            <span>Invite your friends</span>
          </div>
        </div>
        <div className={styles.image_handler}>
          <img src="/icons/gift-modal.svg" />
        </div>
        <div className={styles.description}>
          <p>Get $1</p>
          <span>For every new user you refer</span>
        </div>
        <div className={styles.inputs_container}>
          <div className={styles.input_wrapper}>
            <span>Invite by email:</span>
            <div className={styles.custom_input}>
              <input placeholder="Enter an email address" />
              <button className={styles.invite}>Invite</button>
            </div>
          </div>
          <div className={styles.input_wrapper}>
            <span>Your referral link:</span>
            <div className={styles.custom_input}>
              <input value="https://glorich/user/iamAndrew" disabled={true} />
              <button className={styles.copy}><img src="/icons/copy.svg" onClick={() => success()} /></button>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <div className={styles.user_card}>
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
          <div className={styles.right_item}>
            <div className={styles.gift} onClick={() => openModal(true)}>
              <img src="/icons/gift.svg" />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <CustomButton htmlType={"submit"} style="user_card">
            <div className={styles.button_text}>
              <span id={styles.position}>#2</span>
              <span id={styles.text}>Improve your place</span>
            </div>
          </CustomButton>
        </div>
      </div>
      {giftModal()}
    </div>
  );
}
