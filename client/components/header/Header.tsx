import styles from "./header.module.scss";
import { Menu, Cart, Avatar } from "../../assets/icons";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.iconWrapper}>
          <Menu />
        </div>
        <div className={styles.logoWrapper}>
          <h1>420__vogue</h1>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.iconWrapper}>
          <Cart />
        </div>
        <div className={styles.iconWrapper}>
          <Avatar />
        </div>
      </div>
    </header>
  );
};
