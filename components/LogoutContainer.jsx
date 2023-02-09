import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/LogoutContainer.module.css";

const LogoutContainer = () => {
  const user = useSelector((state) => state.user.value);
  console.log(user);

  return (
    <div className={styles.container}>
      <div className={styles.userInfoWrapper}>
        <img
          src="https://static.vecteezy.com/ti/vecteur-libre/t2/2002332-ablack-man-avatar-character-isolated-icon-gratuit-vectoriel.jpg"
          alt="avatar-icon"
          className={styles.avatarIcon}
        />
        <p style={{ color: "white" }}>@gabriel75</p>
      </div>
      <button className={styles.logoutButton}>Logout</button>
    </div>
  );
};

export default LogoutContainer;
