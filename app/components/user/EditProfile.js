import React, { Fragment, useState } from "react";
import styles from "../../styles/modules/Profile.module.scss";
import CustomButton from "../tools/Button";
import TextInput from "../tools/TextInput";

export default function EditProfile() {
  const [username, setUsername] = useState("iamAndrew");
  const [fullName, setFullName] = useState("Andrew Nguyen");

  const updateUsername = (username) => {
    setUsername(username);
  };
  const updateFullName = (username) => {
    setFullName(username);
  };
  const editProfile = () => {
    console.log("edit");
  };

  const UserContainer = () => {
    return (
      <Fragment>
        <div className={styles.edit_user_image}>
          <img className={styles.user} src="/images/user.png" />
          <div className={styles.edit_image}>
            <img src="/icons/edit-image-profile.svg" />
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <div className={styles.profile_card}>
      <div className={styles.container}>
        <div className={styles.items}>
          <div className={styles.middle_items + " " + styles.edit_profile_item}>
            {UserContainer()}
          </div>
        </div>
        <div className={styles.edit_inputs_container}>
          <div className={styles.edit_input_wrapper}>
            <span className={styles.input_label}>Username:</span>
            <TextInput
              value={username}
              style="edit_profile"
              onChange={updateUsername}
            />
          </div>
          <div className={styles.edit_input_wrapper + " " + styles.has_space}>
            <span className={styles.input_label}>Full name:</span>
            <TextInput
              value={fullName}
              style="edit_profile"
              onChange={updateFullName}
            />
          </div>
        </div>
        <div className={styles.edit_button}>
          <div>
            <CustomButton style="edit_profile" onClick={editProfile}>
              <span className={styles.button_p2}>SAVE CHANGES</span>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
