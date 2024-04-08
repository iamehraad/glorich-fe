import React from 'react'
import styles from "../../styles/modules/Profile.module.scss";
import Authenticated from '../../components/layouts/Authenticated';
import ProfileCard from '../../components/user/ProfileCard';


export default function index() {
    return (
        <Authenticated>
            <div className={styles.profile_wrapper}>
                <ProfileCard />
            </div>
        </Authenticated>
    )
}
