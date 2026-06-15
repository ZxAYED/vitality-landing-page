"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Globe, Mail, MessageSquareText } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import styles from "./Footer.module.css";

const footerAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.08,
    },
  },
};

const itemAnimation: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={`${styles.footer} mt-8 md:mt-14 py-10 md:py-20`}>
      <div className={styles.topDivider} />
      <motion.div
        className={styles.container}
        variants={footerAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        <motion.div
          className={styles.brandBlock}
          variants={itemAnimation}
        >
          <p className={styles.brandName}>Vitalyze</p>
          <p className={styles.brandText}>
            A modern care operations platform connecting appointments, digital
            patient footprint, consultations, and follow-up workflows.
          </p>
          <CTAButton
            href="#waitlist"
            variant="primary"
            className={`${styles.ctaFit} w-fit px-6 py-3`}
          >
            Request Early Access
          </CTAButton>
        </motion.div>

        <motion.div className={styles.columns} variants={itemAnimation}>
          <div className={styles.column}>
            <p className={styles.columnTitle}>Product</p>
            <Link href="#features">Features</Link>
            <Link href="#appointment">Appointment Workflow</Link>
            <Link href="#health-id">Digital Footprint</Link>
            <Link href="#pricing">Pricing</Link>
          </div>

          <div className={styles.column}>
            <p className={styles.columnTitle}>Platform</p>
            <Link href="#how-it-works">How It Works</Link>
            <Link href="#faq">FAQ</Link>
            <a href="mailto:hello@vitalyze.io">Support</a>
            <a href="mailto:hello@vitalyze.io">Sales</a>
          </div>

          <div className={styles.column}>
            <p className={styles.columnTitle}>Resources</p>
            <a href="mailto:hello@vitalyze.io?subject=Product%20Demo%20Request">
              Book Demo
            </a>
            <a href="mailto:hello@vitalyze.io?subject=Integration%20Inquiry">
              Integration Inquiry
            </a>
            <a href="mailto:hello@vitalyze.io?subject=Security%20Question">
              Security Contact
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.bottom}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.35, delay: 0.15 }}
      >
        <div className={styles.bottomInner}>
          <p className={styles.copy}>© {year} Vitalyze. All rights reserved.</p>
          <p className={styles.disclaimer}>
            Vitalyze supports care workflows and is not a substitute for
            emergency or professional medical judgment.
          </p>

          <div className={styles.socials}>
            <a href="mailto:hello@vitalyze.io" aria-label="Email">
              <Mail size={16} />
            </a>
            <a
              href="mailto:hello@vitalyze.io?subject=Vitalyze%20Community"
              aria-label="Community"
            >
              <MessageSquareText size={16} />
            </a>
            <a
              href="https://www.vitalyze.io"
              target="_blank"
              rel="noreferrer"
              aria-label="Vitalyze website"
            >
              <Globe size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
