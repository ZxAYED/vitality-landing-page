import styles from "./AppScreens.module.css";

export default function SplashScreen() {
  return (
    <div className={styles.screen}>
      <div className={styles.centerMessage}>
        <div>
          <div className={styles.logoMark}>V</div>
          <p className={styles.logoName}>Vitalyze</p>
          <p className={styles.logoSub}>Connected care platform</p>
        </div>
      </div>
    </div>
  );
}

