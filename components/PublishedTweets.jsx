import { useEffect, useState } from "react";
import React from "react";
import Card from "./Card";
import styles from "../styles/PublishedTweets.module.css";

const PublishedTweets = () => {
  const [tweetData, setTweetData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((data) => {
        setTweetData(data.tweets);
      });
  }, []);

  console.log(tweetData);
  return (
    <div className={styles.container}>
      {tweetData.map((data, i) => (
        <Card {...data} key={i} />
      ))}
    </div>
  );
};

export default PublishedTweets;
