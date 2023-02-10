import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/user";

function Home() {
  let router = useRouter();

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const dispatch = useDispatch();

  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const handleKeyDown = useCallback((event) => {
    if (
      event.key === "Enter" &&
      document.activeElement.tagName === "INPUT" &&
      document.activeElement.getAttribute("type") === "text"
    ) {
      document.getElementByClassName("buttonSignInInPopup").click();
    }
  }, []);

  const signUpHandler = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signUpUsername,
        email: signUpEmail,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          dispatch(
            login({
              username: signUpUsername,
              token: data.token,
              email: data.email,
            })
          );
          router.push("/tweet");
        }
      });
  };

  const signInHandler = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(
          "LOGIN DATA RETOUR FETCH : " + JSON.parse(JSON.stringify(data))
        );
        if (data.result) {
          dispatch(
            login({
              username: data.username,
              token: data.token,
              email: data.email,
            })
          );
          router.push("/tweet/");
        }
      });
  };

  let opacityPopup = {};

  if (showPopup || showPopup2) {
    opacityPopup = { opacity: 0.5 };
  }
  return (
    <div>
      {showPopup2 && (
        <div className={styles.popupContainer2}>
          <div className={styles.popupHeader}>
            <img
              className={styles.logoPopup}
              src="https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/les-tweets-du-jour-4012594/74013416-2-fre-FR/Les-tweets-du-jour.png"
            />
            <h3 className={styles.popupTitle}>
              Connect to Hacka<span className={styles.tweet2}>Tweet</span>
            </h3>
            <button
              className={styles.closeButton}
              onClick={() => setShowPopup2(false)}
            >
              x
            </button>
          </div>
          <div className={styles.popupBody}>
            <input
              type="text"
              placeholder="Email"
              className={styles.inputPopup}
              onChange={(e) => setSignInEmail(e.target.value)}
              value={signInEmail}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.inputPopup}
              onChange={(e) => setSignInPassword(e.target.value)}
              value={signInPassword}
            />
            <button
              className={styles.buttonSignInInPopup}
              onClick={() => signInHandler()}
            >
              Sign In
            </button>
          </div>
        </div>
      )}

      {showPopup && (
        <div className={styles.popupContainer}>
          <div className={styles.popupHeader}>
            <img
              className={styles.logoPopup}
              src="https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/les-tweets-du-jour-4012594/74013416-2-fre-FR/Les-tweets-du-jour.png"
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
              type="text"
              placeholder="Username"
              className={styles.inputPopup}
              onChange={(e) => setSignUpUsername(e.target.value)}
              value={signUpUsername}
            />
            <input
              type="text"
              placeholder="Email"
              className={styles.inputPopup}
              onChange={(e) => setSignUpEmail(e.target.value)}
              value={signUpEmail}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.inputPopup}
              onChange={(e) => setSignUpPassword(e.target.value)}
              value={signUpPassword}
            />
            <button
              className={styles.buttonSignUpInPopup}
              onClick={() => signUpHandler()}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}

      <div className={styles.body} style={opacityPopup}>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <img
              className={styles.logoLeftSide}
              src="https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/les-tweets-du-jour-4012594/74013416-2-fre-FR/Les-tweets-du-jour.png"
            />
          </div>
          <div className={styles.rightSide}>
            <div className={styles.headerRightSide}>
              <img
                className={styles.logoRightSide}
                src="https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/les-tweets-du-jour-4012594/74013416-2-fre-FR/Les-tweets-du-jour.png"
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
              <button
                className={styles.buttonSignIn}
                onClick={() => setShowPopup2(!showPopup2)}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
