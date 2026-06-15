import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./CTAButton.module.css";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  fullWidth = false,
  className,
  type = "button",
}: CTAButtonProps) {
  const classes = cn(
    styles.button,
    variant === "primary" ? styles.primary : styles.secondary,
    fullWidth ? styles.fullWidth : "",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        {icon ? <span className={styles.icon}>{icon}</span> : null}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      <span>{children}</span>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
    </button>
  );
}

