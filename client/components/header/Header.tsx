import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>420 vogue</div>
      <div className={styles.right}>cart</div>
    </header>
  );
};
