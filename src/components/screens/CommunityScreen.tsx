import styles from "./AppScreens.module.css";

export default function CommunityScreen() {
  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <div className={styles.user}>
          <div className={styles.avatar}>CS</div>
          <div>
            <p className={styles.userName}>Care Support</p>
            <p className={styles.userSub}>Programs and moderated sessions</p>
          </div>
        </div>
        <span className={styles.badge}>Live 2</span>
      </div>

      <div className={styles.card}>
        <p className={styles.cardTitle}>Hypertension follow-up group</p>
        <p className={styles.cardSub}>Structured sessions for medication adherence, symptom tracking, and lifestyle updates.</p>
        <div className={styles.button} style={{ marginTop: 10 }}>Join Session Room</div>
      </div>

      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.itemMain}>
            <p className={styles.itemTitle}>Patient education: BP routines</p>
            <p className={styles.itemSub}>Today, 6:00 PM · 34 participants</p>
          </div>
          <span className={`${styles.pill} ${styles.pillSuccess}`}>Open</span>
        </div>
        <div className={styles.item}>
          <div className={styles.itemMain}>
            <p className={styles.itemTitle}>Post-discharge support thread</p>
            <p className={styles.itemSub}>Doctor-guided and moderated</p>
          </div>
          <span className={`${styles.pill} ${styles.pillWarning}`}>Active</span>
        </div>
      </div>
    </div>
  );
}

