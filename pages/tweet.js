import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import UserSection from "../components/UserSection";
import TweetSection from "../components/TweetSection";
import TrendsSection from "../components/TrendsSection";

import styles from "../styles/tweet.module.css";

const Tweet = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user.value);

  if (!user.token) {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <UserSection />
      <TweetSection />
      <TrendsSection />
    </div>
  );
};

export default Tweet;
