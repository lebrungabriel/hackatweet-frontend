import React from "react";
import styles from "../styles/TweetSection.module.css";
import InputTweet from "./InputTweet";

const TweetSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <h1 style={{ color: "white", height: "10%", marginLeft: "20px" }}>
          Home
        </h1>
        <div className={styles.inputWrapper}>
          <InputTweet />
          <div className={styles.buttonWrapper}>
            <button className={styles.tweetButton}>Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetSection;
