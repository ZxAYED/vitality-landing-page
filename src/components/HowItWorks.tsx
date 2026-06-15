"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, CalendarCheck2, Route } from "lucide-react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    title: "Capture patient context",
    description:
      "Patients check in, upload reports, or scan their QR card so the care team starts each consult with full context.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Schedule, consult, document",
    description:
      "Doctors and admins manage appointments, consultations, and records in one structured workflow.",
    icon: CalendarCheck2,
  },
  {
    number: "03",
    title: "Continue care with history",
    description:
      "Notes, reports, treatment updates, and follow-up actions remain linked to each patient’s digital footprint.",
    icon: Route,
  },
];

export default function HowItWorks() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 26, scale: 0.985, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.eyebrow}>How It Works</p>
          <h2 className={styles.title}>A cleaner workflow from intake to follow-up.</h2>
          <p className={styles.subtitle}>
            Vitalyze keeps teams aligned by connecting check-in context, consultation activity, and ongoing care records.
          </p>
        </motion.div>

        <motion.div
          className={styles.timeline}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          <span className={styles.track} aria-hidden="true" />
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                className={styles.step}
                variants={item}
              >
                <div className={styles.dot}>
                  <Icon size={16} />
                </div>
                <div className={styles.stepCard}>
                  <p className={styles.stepNumber}>{step.number}</p>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


