import { Bell } from "lucide-react";
import styles from "./AppScreens.module.css";

export default function HomeScreen() {
  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <div className={styles.user}>
          <div className={styles.avatar}>DR</div>
          <div>
            <p className={styles.userName}>Dr. Sarah Chen</p>
            <p className={styles.userSub}>Daily check-in queue</p>
          </div>
        </div>
        <Bell size={14} color="#A6ACB2" />
      </div>

      <div className={styles.card}>
        <p className={styles.cardTitle}>Patient check-in summary</p>
        <p className={styles.cardSub}>8 submissions this morning, 2 flagged for follow-up before consultation.</p>
        <div className={styles.grid2} style={{ marginTop: 10 }}>
          <div className={styles.card}>
            <p className={styles.userSub}>Stress trend</p>
            <p className={styles.metricValue}>High</p>
            <p className={styles.metricMeta}>3-day increase</p>
          </div>
          <div className={styles.card}>
            <p className={styles.userSub}>Energy trend</p>
            <p className={styles.metricValue}>62%</p>
            <p className={styles.metricMeta}>Below baseline</p>
          </div>
        </div>
      </div>

      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.itemMain}>
            <p className={styles.itemTitle}>James Wilson</p>
            <p className={styles.itemSub}>Low sleep + elevated stress</p>
          </div>
          <span className={`${styles.pill} ${styles.pillDanger}`}>Review</span>
        </div>
        <div className={styles.item}>
          <div className={styles.itemMain}>
            <p className={styles.itemTitle}>Maria Garcia</p>
            <p className={styles.itemSub}>Mood stable, symptoms improved</p>
          </div>
          <span className={`${styles.pill} ${styles.pillSuccess}`}>Stable</span>
        </div>
      </div>
    </div>
  );
}

