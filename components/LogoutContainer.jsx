import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/user";
import styles from "../styles/LogoutContainer.module.css";

const LogoutContainer = () => {
  let router = useRouter();
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.userInfoWrapper}>
        <img
          src="https://static.vecteezy.com/ti/vecteur-libre/t2/2002332-ablack-man-avatar-character-isolated-icon-gratuit-vectoriel.jpg"
          alt="avatar-icon"
          className={styles.avatarIcon}
        />
        <p style={{ color: "white" }}>@{user.username}</p>
      </div>
      <button className={styles.logoutButton} onClick={() => logoutHandler()}>
        Logout
      </button>
    </div>
  );
};

export default LogoutContainer;
