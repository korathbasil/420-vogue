import styles from "./header.module.scss";

import { LogoText } from "../logo-text/logo-text";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <LogoText />
        <h3>M-Panel</h3>
      </div>

      <div className={styles.right}>
        <div className={styles.info}>
          <h4>Razik Aman</h4>
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