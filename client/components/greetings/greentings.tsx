import styles from "./greentings.module.scss";

export const Greetings = () => {
  return (
    <div className={styles.greetings}>
      <h2>Welcome</h2>
      <h2>Have a nice day.</h2>
    </div>
  );
};
