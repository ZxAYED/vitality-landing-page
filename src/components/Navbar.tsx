"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import StaggeredMenu from "@/components/StaggeredMenu";
import CTAButton from "@/components/ui/CTAButton";
import styles from "./Navbar.module.css";

const links = [
  { href: "#features", label: "Features" },
  { href: "#appointment", label: "Appointments" },
  { href: "#health-id", label: "Digital Footprint" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    update();
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  const mobileItems = useMemo(
    () => [
      { label: "Home / Features", link: "#features" },
      { label: "Appointment Workflow", link: "#appointment" },
      { label: "Digital Footprint", link: "#health-id" },
      { label: "Pricing", link: "#pricing" },
      { label: "FAQ", link: "#faq" },
      { label: "Join Waitlist", link: "#waitlist" },
    ],
    [],
  );

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          <Link href="#features" className={styles.logo} aria-label="Go to features">
            <Image src="/vitalyze-icon.png" alt="Vitalyze" width={36} height={36} priority />
            <span>Vitalyze</span>
          </Link>

          {!isMobile ? (
            <>
              <div className={styles.links}>
                {links.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className={styles.actions}>
                <CTAButton href="#waitlist" variant="primary">
                  Join Waitlist
                </CTAButton>
              </div>
            </>
          ) : (
            <div className={styles.mobileAction}>
              <StaggeredMenu
                className={styles.mobileStaggered}
                position="right"
                displayItemNumbering
                displaySocials={false}
                items={mobileItems}
                colors={["#7B61FF", "#3D6CF5"]}
                accentColor="#3D6CF5"
                menuButtonColor="#F0F1F2"
                openMenuButtonColor="#F0F1F2"
                logoUrl=""
                changeMenuColorOnOpen
                isFixed
              />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

