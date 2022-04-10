import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header>
      <div className={styles.left}>
        <h1>420VOGUE</h1>
        <h3>MPanel</h3>
      </div>

      <div className={styles.right}>
        <div className={styles.info}>
          <h5>Razik Aman</h5>
          <p>Manager</p>
        </div>
        <div className={styles.profileImageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};
