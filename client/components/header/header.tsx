import styles from "./header.module.scss";
import { Menu, Cart, Avatar } from "../../assets/icons";

export const Header = () => {
  return (
    <header className={styles.headerParent}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.iconWrapper}>
              <Menu />
            </div>
          </div>
          <div className={styles.center}>
            <h1>420VOGUE</h1>
          </div>
          <div className={styles.right}>
            <div className={styles.iconWrapper}>
              <Cart />
            </div>
            <div className={styles.iconWrapper}>
              <Avatar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
