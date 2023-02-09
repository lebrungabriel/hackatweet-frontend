import React from "react";
import styles from "../styles/InputTweet.module.css";

const InputTweet = () => {
  return (
    <input type="text" placeholder="What's up?" className={styles.input} />
  );
};

export default InputTweet;
