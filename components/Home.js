import styles from "../styles/Home.module.css";

function Home() {
  return (
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
              Join Hacka<span className={styles.tweet}>Tweet</span> today.
            </h2>
          </div>
        </div>
        <div className={styles.buttonsContainerRightSide}>
          <button className={styles.buttonSignUp}>Sign Up</button>
          <p className={styles.paragrapheButtons}>Already have an account ?</p>
          <button className={styles.buttonSignIn}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
