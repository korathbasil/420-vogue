import styles from "./header.module.scss";
import { Help, Info } from "assets/icons";
import Link from "next/link";

export const HelpMenu = () => {
  return (
    <div className={styles.menu}>
      <Link href="/help">
        <div className={styles.item}>
          <Help size="25px" />
          <p>Help</p>
        </div>
      </Link>
      <Link href="/about-us">
        <div className={styles.item}>
          <Info size="25px" />
          <p>About</p>
        </div>
      </Link>
    </div>
  );
};
