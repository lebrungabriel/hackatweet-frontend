import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Card from "./Card";
import styles from "../styles/PublishedTweets.module.css";

const PublishedTweets = () => {
  const [tweetData, setTweetData] = useState([]);
  const tweet = useSelector((state) => state.tweet.value);

  console.log(tweet);
  // console.log(tweet[0].data.tweet._id);

  // tweet.forEach((element) => {
  //   console.log(element.data.tweet._id);
  // });

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA TWEET : " + data.tweets);
        setTweetData(data.tweets);
      });
  }, [tweet]);

  return (
    <div className={styles.container}>
      {tweetData.map((data, i) => (
        <Card {...data} key={i} />
      ))}
    </div>
  );
};

export default PublishedTweets;
