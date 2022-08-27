import Link from "next/link";

import styles from "./header.module.scss";
import { Avatar, Order, Heart } from "assets/icons";

export const UserMenu = () => {
  return (
    <div onClick={(e) => e.stopPropagation()} className={styles.menu}>
      <Link href="/help">
        <div className={styles.item}>
          <Heart size="25px" />
          <p>My Wishlist</p>
        </div>
      </Link>
      <Link href="/about-us">
        <div className={styles.item}>
          <Order size="25px" />
          <p>My Orders</p>
        </div>
      </Link>
      <Link href="/about-us">
        <div className={styles.item}>
          <Avatar size="25px" />
          <p>My Account</p>
        </div>
      </Link>
    </div>
  );
};
