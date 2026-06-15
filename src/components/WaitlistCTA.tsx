"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";
import styles from "./WaitlistCTA.module.css";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-120px" });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className={styles.section} ref={sectionRef}>
      <div className={styles.glowA} />
      <div className={styles.glowB} />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.eyebrow}>Early Access</p>
          <h2 className={styles.title}>Bring appointments, records, and patient flow into one system.</h2>
          <p className={styles.subtitle}>
            Join the early access list for Vitalyze and get first access to the doctor and admin workflow platform.
          </p>

          {!submitted ? (
            <form className={styles.form} onSubmit={onSubmit}>
              <label htmlFor="waitlist-email" className={styles.srOnly}>
                Work email
              </label>
              <input
                id="waitlist-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your work email"
                className={styles.input}
                required
              />
              <div className={styles.formActions}>
                <CTAButton type="submit" variant="primary" fullWidth>
                  Join Early Access
                </CTAButton>
                <CTAButton href="mailto:hello@vitalyze.io?subject=Request%20Demo%20-%20Vitalyze" variant="secondary" fullWidth>
                  Request Demo
                </CTAButton>
              </div>
            </form>
          ) : (
            <motion.div
              className={styles.success}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className={styles.successTitle}>You are on the early access list.</p>
              <p className={styles.successText}>
                Thanks for your interest. We will reach out from hello@vitalyze.io with rollout and demo details.
              </p>
              <CTAButton href="mailto:hello@vitalyze.io?subject=Request%20Demo%20-%20Vitalyze" variant="secondary">
                Request Demo
              </CTAButton>
            </motion.div>
          )}

          <p className={styles.legal}>No spam. Product updates only. You can unsubscribe any time.</p>
        </motion.div>
      </div>
    </section>
  );
}


