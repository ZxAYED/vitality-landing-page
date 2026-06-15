"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What is Vitalyze?",
    a: "Vitalyze is a connected care workflow platform that brings appointment operations, patient records, and consultation follow-up into one system.",
  },
  {
    q: "Is this built for clinics, doctors, or patients?",
    a: "It is designed for care teams and admins first, while patients use linked check-in, card, and communication flows.",
  },
  {
    q: "How does the digital patient footprint work?",
    a: "Each patient has a living profile that links identity, visit timeline, reports, prescriptions, notes, and follow-up actions.",
  },
  {
    q: "Can we use QR or card-based record access?",
    a: "Yes. Teams can open verified patient context quickly using a QR or digital card entry point.",
  },
  {
    q: "Does it support video consultation workflow?",
    a: "Yes. Booking, consultation status, documentation, and next-step actions are connected in one workflow.",
  },
  {
    q: "Can admins manage appointment operations?",
    a: "Yes. Admins can coordinate schedules, status changes, reminders, and operational oversight from one dashboard.",
  },
  {
    q: "Is patient data secure?",
    a: "Data handling follows secure access controls, encrypted transfer paths, and role-based visibility.",
  },
  {
    q: "How do I request access or a demo?",
    a: "Use the early-access form to join the rollout queue and request a guided product demo.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>FAQ</p>
        <h2 className={styles.title}>Answers for teams evaluating Vitalyze.</h2>

        <div className={styles.list}>
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const btnId = `faq-trigger-${index}`;

            return (
              <article key={faq.q} className={`${styles.item} ${open ? styles.open : ""}`}>
                <h3 className={styles.heading}>
                  <button
                    id={btnId}
                    className={styles.trigger}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.icon} aria-hidden="true">
                      {open ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={styles.panel}
                  data-open={open ? "true" : "false"}
                >
                  <p>{faq.a}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className={styles.contact}>
          Need a direct answer? <a href="mailto:hello@vitalyze.io">hello@vitalyze.io</a>
        </p>
      </div>
    </section>
  );
}


