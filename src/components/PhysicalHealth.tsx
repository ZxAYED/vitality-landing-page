"use client";

import { motion } from "framer-motion";
import { CalendarCheck2, QrCode, Video } from "lucide-react";
import styles from "./PhysicalHealth.module.css";

const cards = [
  {
    eyebrow: "Appointment Management",
    title: "Manage bookings, confirmations, and follow-ups in one place.",
    description:
      "Give staff and doctors a cleaner workflow for scheduling, rescheduling, reminders, and post-visit actions.",
    gradient:
      "linear-gradient(135deg, rgba(61,108,245,0.18) 0%, rgba(255,255,255,0.05) 32%, rgba(16,17,18,0.96) 100%)",
    icon: CalendarCheck2,
  },
  {
    eyebrow: "Patient Digital Footprint",
    title: "A QR-based patient record with full history at a glance.",
    description:
      "Access patient identity, visits, labs, prescriptions, notes, and care timeline through a secure digital card or QR entry system.",
    gradient:
      "linear-gradient(135deg, rgba(123,97,255,0.18) 0%, rgba(177,158,239,0.08) 32%, rgba(16,17,18,0.96) 100%)",
    icon: QrCode,
  },
  {
    eyebrow: "Video Consultation",
    title: "Move from booking to consultation without workflow friction.",
    description:
      "Keep video visits, patient context, and next-step actions connected in the same flow.",
    gradient:
      "linear-gradient(135deg, rgba(25,195,13,0.14) 0%, rgba(255,255,255,0.04) 28%, rgba(16,17,18,0.96) 100%)",
    icon: Video,
  },
];

export default function PhysicalHealth() {
  return (
    <section id="product-features" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.eyebrow}>Platform Features</p>
          <h2 className={styles.title}>Built for real care operations, not fragmented tools.</h2>
          <p className={styles.subtitle}>
            Vitalyze gives your team one connected system for appointments, records, and consultation continuity.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                className={styles.card}
                style={{ background: card.gradient }}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={20} />
                </div>
                <p className={styles.cardEyebrow}>{card.eyebrow}</p>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


