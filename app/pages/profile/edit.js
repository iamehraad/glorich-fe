import React from "react";
import styles from "../../styles/modules/Profile.module.scss";
import Authenticated from "../../components/layouts/Authenticated";
import EditProfile from "../../components/user/EditProfile";
import BackButton from "../../components/tools/BackButton";

export default function edit() {


  return (
    <Authenticated>
      <div className={styles.edit_profile_wrapper}>
        <BackButton path={"/profile"} />
        <EditProfile />
      </div>
    </Authenticated>
  );
}
