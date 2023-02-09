import styles from "../styles/Home.module.css";
import React, { useState } from "react";

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  let opacityPopup = {};

  if (showPopup) {
    opacityPopup = { opacity: 0.5 };
  }
  return (
    <>
      {showPopup && (
        <div className={styles.popupContainer}>
          <div className={styles.popupHeader}>
            <img
              className={styles.logoPopup}
              src='https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/les-tweets-du-jour-4012594/74013416-2-fre-FR/Les-tweets-du-jour.png'
            />
            <h3 className={styles.popupTitle}>
              Create your Hacka<span className={styles.tweet}>Tweet</span>{" "}
              account
            </h3>
            <button
              className={styles.closeButton}
              onClick={() => setShowPopup(false)}
            >
              x
            </button>
          </div>
          <div className={styles.popupBody}>
            <input
              type='text'
              placeholder='Firstname'
              className={styles.inputPopup}
            />
            <input
              type='text'
              placeholder='Usernape'
              className={styles.inputPopup}
            />
            <input
              type='password'
              placeholder='Password'
              className={styles.inputPopup}
            />
            <button className={styles.buttonSignUpInPopup}>Sign Up</button>
          </div>
        </div>
      )}
      <div className={styles.body} style={opacityPopup}>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <img
              className={styles.logoLeftSide}
              src='https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/les-tweets-du-jour-4012594/74013416-2-fre-FR/Les-tweets-du-jour.png'
            />
          </div>
          <div className={styles.rightSide}>
            <div className={styles.headerRightSide}>
              <img
                className={styles.logoRightSide}
                src='https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/les-tweets-du-jour-4012594/74013416-2-fre-FR/Les-tweets-du-jour.png'
              />
            </div>
            <div className={styles.containerRightSide}>
              <div className={styles.titleRightSide}>
                <h1 className={styles.titleOne}>
                  See what's
                  <br />
                  happening
                </h1>
                <h2 className={styles.titleTwo}>
                  Join Hacka<span className={styles.tweet}>Tweet</span>today.
                </h2>
              </div>
            </div>
            <div className={styles.buttonsContainerRightSide}>
              <button
                className={styles.buttonSignUp}
                onClick={() => setShowPopup(!showPopup)}
              >
                Sign Up
              </button>
              <p className={styles.paragrapheButtons}>
                Already have an account ?
              </p>
              <button className={styles.buttonSignIn}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
