import styles from "./header.module.scss";
import { Cart, Avatar } from "../../assets/icons";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>420 vogue</div>
      <div className={styles.right}>
        <Cart />
        <Avatar />
      </div>
    </header>
  );
};
