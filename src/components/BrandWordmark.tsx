"use client";

import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import styles from "./BrandWordmark.module.css";

export default function BrandWordmark() {
  return (
    <section className={styles.section} aria-label="Vitalyze brand wordmark">
      <div className={styles.glow} />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={styles.inner}
      >
        <GradientText
          colors={["#3D6CF5", "#7B61FF", "#B19EEF", "#3D6CF5"]}
          animationSpeed={20}
          showBorder={false}
          pauseOnHover={false}
          direction="horizontal"
          yoyo
          className={styles.wordmark}
        >
          Vitalyze
        </GradientText>
        <p className={styles.sub}>Appointment flow, patient records, and care continuity in one platform.</p>
      </motion.div>
    </section>
  );
}

