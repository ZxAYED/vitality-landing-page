"use client";

import { motion } from "framer-motion";
import PlanButton from "@/components/ui/PlanButton";
import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Essential",
    description: "For solo doctors starting with streamlined scheduling and records.",
    availability: "Launching soon",
    features: [
      "Appointment scheduling and reminders",
      "Patient profile and visit history",
      "Basic consultation notes",
      "Daily operational dashboard",
      "Email support",
    ],
    cta: "Join Early Access",
    highlighted: false,
  },
  {
    name: "Clinic",
    description: "For growing clinics coordinating teams, records, and follow-up workflows.",
    availability: "Launching soon",
    features: [
      "Everything in Essential",
      "Role-based team workflows",
      "Digital patient footprint and QR access",
      "Video consultation workflow",
      "Follow-up task routing and reporting",
    ],
    cta: "Request Priority Access",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For healthcare groups requiring advanced governance and integrations.",
    availability: "Custom onboarding",
    features: [
      "Everything in Clinic",
      "Multi-location administration",
      "Advanced analytics and exports",
      "Integration and migration support",
      "Dedicated success manager",
    ],
    cta: "Talk to Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.eyebrow}>Pricing</p>
          <h2 className={styles.title}>Plans built for real care operations.</h2>
          <p className={styles.subtitle}>
            Choose the rollout path that matches your practice size today and scale into deeper workflow automation as your team grows.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              className={`${styles.card} ${plan.highlighted ? styles.cardHighlighted : ""}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {plan.highlighted ? <span className={styles.popular}>Most practical for clinics</span> : null}
              <p className={styles.planName}>{plan.name}</p>
              <p className={styles.planDescription}>{plan.description}</p>
              <p className={styles.availability}>{plan.availability}</p>

              <ul className={styles.featureList}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <PlanButton href="#waitlist" variant={plan.highlighted ? "primary" : "secondary"}>
                {plan.cta}
              </PlanButton>
            </motion.article>
          ))}
        </div>

        <p className={styles.note}>
          Final pricing is confirmed during onboarding. Early access members receive launch priority and guided setup.
        </p>
      </div>
    </section>
  );
}


