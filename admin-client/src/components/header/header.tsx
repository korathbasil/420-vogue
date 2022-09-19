import { useSelector } from "react-redux";

import styles from "./header.module.scss";
import { LogoText } from "../logo-text/logo-text";

export const Header = () => {
  // @ts-ignore
  const user = useSelector((state) => state.auth.user);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <LogoText />
        <h3>M-Panel</h3>
      </div>

      {user && (
        <div className={styles.right}>
          <div className={styles.info}>
            <h4>{`${user.firstname} ${user.lastname}`}</h4>
            <p>{user.role === "ADMIN" ? "Manager" : "Super Admin"}</p>
          </div>
          {/* <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            /> */}
          <button className="primary-button">Logout</button>
        </div>
      )}
    </header>
  );
};
