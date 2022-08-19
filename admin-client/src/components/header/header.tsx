import { useSelector } from "react-redux";

import styles from "./header.module.scss";
import { LogoText } from "../logo-text/logo-text";

export const Header = () => {
  // @ts-ignore
  const user = useSelector((state) => state.auth.user);
  // @ts-ignore
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <LogoText />
        <h3>M-Panel</h3>
      </div>

      {loggedIn && (
        <div className={styles.right}>
          <div className={styles.info}>
            <h4>{`${user?.firstname} ${user?.lastname}`}</h4>
            <p>Manager</p>
          </div>
          <div className={styles.profileImageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
          </div>
        </div>
      )}
    </header>
  );
};
