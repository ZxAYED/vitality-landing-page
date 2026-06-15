"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "Vitalyze caught an elevated resting heart rate trend 3 weeks before my doctor noticed. The AI literally got me ahead of a potential cardiac issue.",
    tag: "Physical Health",
    tagColor: "var(--success)",
  },
  {
    text: "My sleep score went from 58 to 84 in four weeks. Vitalyze pinpointed that eating dinner after 8 pm was destroying my deep sleep. Simple fix, massive change.",
    tag: "Sleep Analysis",
    tagColor: "var(--primary)",
  },
  {
    text: "As an athlete, I've tried every tracker. Vitalyze is the first that tells me WHEN to push vs. rest. Performance up 18% in 8 weeks â€” without training more.",
    tag: "Performance",
    tagColor: "var(--mood-great)",
  },
  {
    text: "The AR grounding feature is unlike anything I've experienced. When panic sets in, it anchors me back to the present immediately. Anxiety attacks down from daily to once a week.",
    tag: "Mental Wellness",
    tagColor: "#7B61FF",
  },
  {
    text: "After 3 sessions with my Vitalyze coach I had better coping strategies than I did after months of traditional therapy. I was skeptical. I'm a believer now.",
    tag: "Coaching",
    tagColor: "var(--warning)",
  },
  {
    text: "The community sessions changed everything. I found people dealing with exactly what I was going through. For the first time in years, I didn't feel like I was fighting alone.",
    tag: "Community",
    tagColor: "#FF3B30",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <span className="section-label">Real Results</span>
        <h2 className={styles.title}>
          Body wins. Mind wins.<br />Both at once.
        </h2>
        <p className={styles.subtitle}>
          12,000+ early members tracking both sides of their health â€” and the results speak for themselves. Every story below is a real beta outcome.
        </p>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {duplicatedTestimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.tag} style={{ color: t.tagColor, borderColor: `${t.tagColor}33`, background: `${t.tagColor}11` }}>
                <span className={styles.tagDot} style={{ background: t.tagColor }} />
                {t.tag}
              </span>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.stars}>â˜…â˜…â˜…â˜…â˜…</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

