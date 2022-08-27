import Link from "next/link";

import styles from "./header.module.scss";
import { Help, Info } from "assets/icons";

export const UserMenu = () => {
  return (
    <div onClick={(e) => e.stopPropagation()} className={styles.menu}>
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
