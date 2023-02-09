import React from "react";
import styles from "../styles/UserSection.module.css";
import LogoutContainer from "./LogoutContainer";

const UserSection = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4102/4102952.png"
        alt="tweet-logo"
        className={styles.logo}
      />
      <LogoutContainer />
    </div>
  );
};

export default UserSection;
