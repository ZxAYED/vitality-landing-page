import styles from "./AppScreens.module.css";

export default function AppointmentScreen() {
  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <div className={styles.user}>
          <div className={styles.avatar}>AW</div>
          <div>
            <p className={styles.userName}>Appointment Workflow</p>
            <p className={styles.userSub}>Scheduling to follow-up continuity</p>
          </div>
        </div>
      </div>

      <div className={styles.button}>+ New Appointment</div>

      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.itemMain}>
            <p className={styles.itemTitle}>James Wilson · 09:30 AM</p>
            <p className={styles.itemSub}>Video consult · Checkup review</p>
          </div>
          <span className={`${styles.pill} ${styles.pillSuccess}`}>Confirmed</span>
        </div>

        <div className={styles.item}>
          <div className={styles.itemMain}>
            <p className={styles.itemTitle}>Maria Garcia · 11:00 AM</p>
            <p className={styles.itemSub}>In-person · Follow-up</p>
          </div>
          <span className={`${styles.pill} ${styles.pillWarning}`}>Upcoming</span>
        </div>

        <div className={styles.item}>
          <div className={styles.itemMain}>
            <p className={styles.itemTitle}>Darlene Robertson · 01:15 PM</p>
            <p className={styles.itemSub}>Video consult · Medication adjust</p>
          </div>
          <span className={`${styles.pill} ${styles.pillDanger}`}>Needs prep</span>
        </div>
      </div>

      <div className={styles.card}>
        <p className={styles.cardTitle}>Next-step automation</p>
        <p className={styles.cardSub}>Send summary, assign follow-up task, and schedule next visit in one flow.</p>
      </div>
    </div>
  );
}

