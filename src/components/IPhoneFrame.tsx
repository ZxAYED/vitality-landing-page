import styles from "./IPhoneFrame.module.css";

interface IPhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function IPhoneFrame({ children, className }: IPhoneFrameProps) {
  return (
    <div className={`${styles.frame} ${className || ""}`}>
      <div className={styles.dynamicIsland}>
        <div className={styles.islandDot} />
        <div className={styles.islandCam} />
      </div>

      <div className={styles.screen}>{children}</div>
      <div className={styles.homeIndicator}><div className={styles.bar} /></div>
    </div>
  );
}

