import React from "react";
import { BsHeart, BsFillTrashFill } from "react-icons/bs";

import { removeTweetFromStore } from "../reducers/tweet";

import { formatDistance, subDays } from "date-fns";

import styles from "../styles/Card.module.css";
import { useDispatch, useSelector } from "react-redux";

const Card = (props) => {
  const user = useSelector((state) => state.user.value);
  const tweet = useSelector((state) => state.tweet.value);
  // tweet.forEach((singleTweet) => console.log(singleTweet));
  const dispatch = useDispatch();

  const deleteTweetHandler = () => {
    fetch(`http://localhost:3000/tweets/${props._id}/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(removeTweetFromStore(data));
        }
      });
  };

  return (
    <div className={styles.card}>
      <div className={styles.tweetWrapper}>
        <div className={styles.userInfos}>
          <img
            className={styles.avatar}
            src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitter_Logo.png"
            alt="avatar-icon"
          />
          <p style={{ marginRight: "10px" }}>{props.author.username}</p>
          <p>
            {formatDistance(subDays(new Date(), 0), new Date(props.date), {
              addSuffix: true,
            })}
          </p>
        </div>
        <div className={styles.tweet}>
          <p>{props.content}</p>
        </div>
      </div>
      <div className={styles.iconsWrapper}>
        <BsHeart />
        {user.email === props.author.email && (
          <BsFillTrashFill onClick={() => deleteTweetHandler()} />
        )}
      </div>
    </div>
  );
};

export default Card;
