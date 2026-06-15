import styles from "./AppScreens.module.css";

export default function WellnessScreen() {
  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <div className={styles.user}>
          <div className={styles.avatar}>HS</div>
          <div>
            <p className={styles.userName}>Health Snapshot</p>
            <p className={styles.userSub}>Updated 4 mins ago</p>
          </div>
        </div>
        <span className={styles.badge}>Actionable</span>
      </div>

      <div className={styles.grid2}>
        <div className={styles.card}>
          <p className={styles.userSub}>Composite score</p>
          <p className={styles.metricValue}>82%</p>
          <div className={styles.progress}><span style={{ width: "82%", background: "#3D6CF5" }} /></div>
          <p className={styles.metricMeta}>+3% vs last week</p>
        </div>

        <div className={styles.card}>
          <p className={styles.userSub}>Risk signal</p>
          <p className={styles.metricValue}>Moderate</p>
          <div className={styles.progress}><span style={{ width: "46%", background: "#FF9F0A" }} /></div>
          <p className={styles.metricMeta}>Medication check suggested</p>
        </div>
      </div>

      <div className={styles.card}>
        <p className={styles.cardTitle}>Trend summary</p>
        <div className={styles.list} style={{ marginTop: 8 }}>
          <div className={styles.item}>
            <div className={styles.itemMain}>
              <p className={styles.itemTitle}>Sleep consistency</p>
              <p className={styles.itemSub}>6.9h average over 7 days</p>
            </div>
            <span className={`${styles.pill} ${styles.pillWarning}`}>Watch</span>
          </div>
          <div className={styles.item}>
            <div className={styles.itemMain}>
              <p className={styles.itemTitle}>Recovery status</p>
              <p className={styles.itemSub}>Improving from last baseline</p>
            </div>
            <span className={`${styles.pill} ${styles.pillSuccess}`}>Good</span>
          </div>
        </div>
      </div>
    </div>
  );
}

