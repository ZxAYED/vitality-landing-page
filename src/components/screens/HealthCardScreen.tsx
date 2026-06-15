import { QrCode } from "lucide-react";
import styles from "./AppScreens.module.css";

export default function HealthCardScreen() {
  const dots = new Array(64).fill(0).map((_, index) => index);

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <div className={styles.user}>
          <div className={styles.avatar}>PF</div>
          <div>
            <p className={styles.userName}>Digital Patient Footprint</p>
            <p className={styles.userSub}>QR + card-based history access</p>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.qrWrap}>
          <div className={styles.qrBox}>
            <div className={styles.qrGrid}>
              {dots.map((dot) => (
                <span key={dot} className={styles.qrDot} style={{ opacity: dot % 3 === 0 ? 1 : 0.15 }} />
              ))}
            </div>
          </div>
        </div>
        <p className={styles.cardSub} style={{ textAlign: "center" }}>
          Scan card to access verified identity, visit timeline, allergies, labs, and prescriptions.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.recordRows}>
          <div className={styles.recordRow}><span>Patient ID</span><strong>HID-8829</strong></div>
          <div className={styles.recordRow}><span>Allergies</span><strong>Penicillin</strong></div>
          <div className={styles.recordRow}><span>Last consult</span><strong>Mar 18, 2026</strong></div>
          <div className={styles.recordRow}><span>Labs attached</span><strong>4 reports</strong></div>
          <div className={styles.recordRow}><span>Medications</span><strong>3 active</strong></div>
        </div>
      </div>

      <div className={styles.button}><QrCode size={12} style={{ marginRight: 6 }} />Open patient timeline</div>
    </div>
  );
}

