import React from "react";
import { BsHeart, BsFillTrashFill } from "react-icons/bs";

import { formatDistance, subDays } from "date-fns";

import styles from "../styles/Card.module.css";

const Card = (props) => {
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
        <BsFillTrashFill />
      </div>
    </div>
  );
};

export default Card;
