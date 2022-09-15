import { Dispatch, FC, SetStateAction, useEffect } from "react";
import Link from "next/link";
import { useUserStore } from "store";

import styles from "./sidebar.module.scss";
import { Close, Heart, Order, Avatar, Help, Info } from "assets/icons";
import { LogoText } from "components/logo-text/logo-text";

interface SidebarProps {
  isSidebarOpen: boolean;
  sidebarToggleHandler: () => void;
  loginModalToggleHandler: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar: FC<SidebarProps> = ({
  isSidebarOpen,
  sidebarToggleHandler,
  loginModalToggleHandler,
}) => {
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const sidebar = document.getElementById("sidebar") as HTMLElement;
    if (isSidebarOpen) {
      sidebar.style.left = "0";
      sidebar.style.width = "300%";
      sidebar.style.backgroundColor = "var(--clr-black-50)";
    } else {
      sidebar.style.width = "300px";
      sidebar.style.backgroundColor = "transparent";
      sidebar.style.left = "-200%";
    }
  }, [isSidebarOpen]);
  return (
    <aside
      id="sidebar"
      onClick={sidebarToggleHandler}
      className={styles.parent}
    >
      <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
        {user && (
          <div className={styles.header}>
            <h2>
              {user.firstname} {user.lastname}
            </h2>
            <p>{user.email}</p>
            <p>+918848029932</p>
          </div>
        )}
        {!user && (
          <div className={styles.header}>
            <div>
              <h4>Hello,</h4>
              <h2>Guest</h2>
            </div>
            <button
              onClick={() => {
                sidebarToggleHandler();
                loginModalToggleHandler(true);
              }}
            >
              LOGIN / SIGNUP
            </button>
          </div>
        )}

        <nav>
          <ul>
            <Link href={"/fav"}>
              <a className={styles.link}>
                <Heart />
                <p>MY FAVOURITES</p>
              </a>
            </Link>
          </ul>
          <ul>
            <Link href={"/orders"}>
              <a className={styles.link}>
                <div className={styles.iconWrapper}>
                  <Order />
                </div>
                <p>MY ORDERS</p>
              </a>
            </Link>
          </ul>
          <ul>
            <Link href={"/account"}>
              <a className={styles.link}>
                <div className={styles.iconWrapper}>
                  <Avatar />
                </div>
                <p>MY ACCOUNT</p>
              </a>
            </Link>
          </ul>

          <div className={styles.bottom}>
            <ul>
              <Link href={"/help"}>
                <a className={styles.link}>
                  <div className={styles.iconWrapper}>
                    <Help />
                  </div>
                  <p>HELP</p>
                </a>
              </Link>
            </ul>
            <ul>
              <Link href={"/about-us"}>
                <a className={styles.link}>
                  <div className={styles.iconWrapper}>
                    <Info />
                  </div>
                  <p>ABOUT US</p>
                </a>
              </Link>
            </ul>
            <div className={styles.logo}>
              <LogoText fontSize="16px" />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};
