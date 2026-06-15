"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import styles from "./FeatureShowcase.module.css";
import IPhoneFrame from "./IPhoneFrame";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import WellnessScreen from "./screens/WellnessScreen";
import CommunityScreen from "./screens/CommunityScreen";
import HealthCardScreen from "./screens/HealthCardScreen";
import ExclusiveScreen from "./screens/ExclusiveScreen";
import AppointmentScreen from "./screens/AppointmentScreen";

const features = [
  {
    id: "emotion",
    label: "Emotion Tracking",
    title: "Know how you feel — and why it changes.",
    description:
      "Log your emotions every day. Vitalyze surfaces the patterns you'd never spot yourself: what triggers your anxiety, what genuinely lifts you, what your body has been signalling all along.",
    accent: "var(--mood-great)",
    icon: "😊",
    screen: <HomeScreen />,
  },
  {
    id: "wellness",
    label: "Wellness Score",
    title: "One score. Your complete picture.",
    description:
      "Personalized baselines benchmarked against your own history, predictive alerts with 98% accuracy, and action intelligence — exactly what to do to improve your score today, this week, and this year.",
    accent: "var(--primary)",
    icon: "📊",
    screen: <WellnessScreen />,
  },
  {
    id: "community",
    label: "Community",
    title: "12,000+ early members. And growing.",
    description:
      "No performance. No judgment. A safe, moderated space full of real people sharing real experiences — and lifting each other up every single day. Peer-led sessions on mindfulness, anxiety, and stress relief — live, every day.",
    accent: "#FF3B30",
    icon: "🤝",
    screen: <CommunityScreen />,
  },
  {
    id: "health-id",
    label: "Digital Health ID",
    title: "One ID. Your entire health story.",
    description:
      "Your Vitalyze Digital Health ID is a living health passport — combining every biomarker, mental wellness score, lab result, and practitioner note into a single verified identity, accepted across 200+ healthcare providers worldwide.",
    accent: "var(--primary)",
    icon: "🆔",
    screen: <HealthCardScreen />,
  },
  {
    id: "exclusive",
    label: "Exclusive Features",
    title: "Nothing quite like these anywhere else.",
    description:
      "AR Grounding overlays breathing guides and sensory anchors — proven to reduce acute anxiety in under 3 minutes. Binaural beats synchronize your brain for deeper rest with 200+ nature sounds dialled in to your unique sleep profile.",
    accent: "#7B61FF",
    icon: "✨",
    screen: <ExclusiveScreen />,
  },
  {
    id: "appointment",
    label: "Doctor Appointment",
    title: "See a real doctor today — from anywhere.",
    description:
      "Connect instantly with certified GPs via secure video call. Your Health ID automatically shares your biomarkers, lab results, wearable data, and health history — so every consultation starts with the full picture, not a blank form.",
    accent: "var(--success)",
    icon: "🩺",
    screen: <AppointmentScreen />,
  },
];

export default function FeatureShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollY } = useScroll();

  // Fade hero text out reliably between 200px and 700px of vertical scroll
  const heroTextOpacity = useTransform(scrollY, [0, 200, 700], [1, 1, 0]);
  const heroTextY = useTransform(scrollY, [0, 700], [0, -50]);

  const scrollIndOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // If we scroll back up into the hero spacer
      if (containerRef.current) {
        const top = containerRef.current.getBoundingClientRect().top;
        if (top > -window.innerHeight * 0.5) {
          setActiveIndex(-1);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentScreen = activeIndex >= 0 ? features[activeIndex].screen : <SplashScreen />;
  const currentAccent = activeIndex >= 0 ? features[activeIndex].accent : "var(--primary)";

  return (
    <section id="features" className={styles.showcase} ref={containerRef}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      <div className={styles.stickyContainer}>
        {/* Hero Text */}
        <motion.div
          className={styles.heroTextFixed}
          style={{ opacity: heroTextOpacity, y: heroTextY }}
        >
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            ✦ Get 14 days Premium free when we launch
          </div>
          <h1 className={styles.title}>
            Innovation<br />
            Meets<br />
            <span className="gradient-text">Wellness</span><br />
            Excellence
          </h1>
          <p className={styles.subtitle}>
            The only app that connects your biometrics to your mental health —
            and reveals the patterns your body has been whispering all along.
          </p>
          <div className={styles.actions}>
            <a href="#waitlist" className={styles.primaryBtn}>
              Join the Waitlist — Free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 6 }}>
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#demo" className={styles.secondaryBtn}>
              ▶ Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Phone sticky wrapper */}
        <motion.div
          className={styles.phoneWrapper}
        >
          <div
            className={styles.phoneGlow}
            style={{ background: `radial-gradient(circle, ${currentAccent}15 0%, transparent 70%)` }}
          />
          <IPhoneFrame>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: "100%" }}
              >
                {currentScreen}
              </motion.div>
            </AnimatePresence>
          </IPhoneFrame>
        </motion.div>
      </div>

      <motion.div className={styles.scrollIndicator} style={{ opacity: scrollIndOpacity }}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <span className={styles.scrollText}>Scroll Down</span>
      </motion.div>

      {/* Feature Scroll Track */}
      <div className={styles.scrollTrack}>
        <div className={styles.heroSpacer} />
        {features.map((f, i) => (
          <div
            key={f.id}
            ref={(el) => { sectionRefs.current[i] = el; }}
            className={styles.featureSection}
            id={f.id}
          >
            <div className={`${styles.featureContent} ${i === activeIndex ? styles.active : ""}`}>
              <div className={styles.featureNum}>
                <span>{f.icon}</span>
              </div>
              <span className={styles.featureLabel} style={{ color: f.accent }}>
                {f.label}
              </span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.description}</p>

              <div className={styles.mobilePhoneInline}>
                <div
                  className={styles.phoneGlow}
                  style={{ background: `radial-gradient(circle, ${f.accent}15 0%, transparent 70%)` }}
                />
                <IPhoneFrame>
                  {f.screen}
                </IPhoneFrame>
              </div>

              <div className={styles.featureLine} style={{ background: f.accent }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
