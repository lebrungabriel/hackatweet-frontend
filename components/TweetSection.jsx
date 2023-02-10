import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTweetToStore } from "../reducers/tweet";
import styles from "../styles/TweetSection.module.css";
import PublishedTweets from "./PublishedTweets";

const TweetSection = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const tweet = useSelector((state) => state.tweet.value);
  const [inputTweet, setInputTweet] = useState("");

  const postTweetHandler = () => {
    fetch(`http://localhost:3000/tweets/post/${user.token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: inputTweet,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          dispatch(addTweetToStore(inputTweet));
          setInputTweet("");
        }
      });
  };

  console.log("Voici les tweet dans le store : " + tweet);

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <h1 className={styles.titleSection}>Home</h1>
        <div className={styles.inputWrapper}>
          <input
            className={styles.inputTweet}
            type="text"
            placeholder="What's up?"
            onChange={(e) => setInputTweet(e.target.value)}
          />
          <div className={styles.buttonWrapper}>
            <button
              className={styles.tweetButton}
              onClick={() => postTweetHandler()}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>

      <PublishedTweets />
    </div>
  );
};

export default TweetSection;
