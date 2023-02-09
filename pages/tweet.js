import React from "react";
import UserSection from "../components/UserSection";
import TweetSection from "../components/TweetSection";
import TrendsSection from "../components/TrendsSection";

import styles from "../styles/tweet.module.css";

const Tweet = () => {
  return (
    <div className={styles.container}>
      <UserSection />
      <TweetSection />
      <TrendsSection />
    </div>
  );
};

export default Tweet;
