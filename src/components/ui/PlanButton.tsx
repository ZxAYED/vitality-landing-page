import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./PlanButton.module.css";

interface PlanButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function PlanButton({
  children,
  href,
  onClick,
  variant = "secondary",
  icon,
  fullWidth = true,
  className,
  type = "button",
}: PlanButtonProps) {
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

