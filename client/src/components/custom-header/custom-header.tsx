import styles from "./custom-header.module.scss";

export const CHeader = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h2>Header</h2>
      </div>
    </header>
  );
};
