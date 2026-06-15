import styles from "./AppScreens.module.css";

export default function ExclusiveScreen() {
  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <div className={styles.user}>
          <div className={styles.avatar}>RI</div>
          <div>
            <p className={styles.userName}>Records Intelligence</p>
            <p className={styles.userSub}>Connected files, notes, and actions</p>
          </div>
        </div>
        <span className={styles.badge}>Linked</span>
      </div>

      <div className={styles.grid2}>
        <div className={styles.card}>
          <p className={styles.cardTitle}>Consultation notes</p>
          <p className={styles.cardSub}>3 entries synced with medication updates.</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>Follow-up actions</p>
          <p className={styles.cardSub}>2 pending reminders for care team.</p>
        </div>
      </div>

      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.itemMain}>
            <p className={styles.itemTitle}>Lab Report · CBC Panel</p>
            <p className={styles.itemSub}>Attached to visit #A103</p>
          </div>
          <span className={`${styles.pill} ${styles.pillSuccess}`}>Synced</span>
        </div>
        <div className={styles.item}>
          <div className={styles.itemMain}>
            <p className={styles.itemTitle}>Medication Adjustment Note</p>
            <p className={styles.itemSub}>Pending doctor acknowledgement</p>
          </div>
          <span className={`${styles.pill} ${styles.pillWarning}`}>Pending</span>
        </div>
        <div className={styles.item}>
          <div className={styles.itemMain}>
            <p className={styles.itemTitle}>Discharge Summary</p>
            <p className={styles.itemSub}>Mapped to continuity workflow</p>
          </div>
          <span className={`${styles.pill} ${styles.pillSuccess}`}>Ready</span>
        </div>
      </div>
    </div>
  );
}

