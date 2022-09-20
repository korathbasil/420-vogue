import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import styles from "./header.module.scss";
import { LogoText } from "../logo-text/logo-text";
import { State } from "state/store";

export const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state: State) => state.auth.user);

  function logoutHandler() {
    // dispatch({
    //   type: "user/set",
    //   payload: {
    //     loggedIn: false,
    //     user: null,
    //   },
    // });
    // Reset all cookies
    document.cookie =
      "access-token" +
      "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=http://localhost3000 ;";
    // router.replace("/login");

    // clearAllCookies();
  }

  function clearAllCookies() {
    const cookies = document.cookie.split(";");

    cookies.forEach((c) => {
      document.cookie = c + "=;expires=" + new Date(0).toUTCString();
    });
  }

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
          <button className="primary-button" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      )}
    </header>
  );
};
