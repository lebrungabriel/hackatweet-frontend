import React from "react";
import styles from "../styles/TweetSection.module.css";
import PublishedTweets from "./PublishedTweets";

const TweetSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <h1 style={{ color: "white", height: "10%", marginLeft: "20px" }}>
          Home
        </h1>
        <div className={styles.inputWrapper}>
          <input
            className={styles.inputTweet}
            type="text"
            placeholder="What's up?"
          />
          <div className={styles.buttonWrapper}>
            <button className={styles.tweetButton}>Tweet</button>
          </div>
        </div>
      </div>

      <PublishedTweets />
    </div>
  );
};

export default TweetSection;
