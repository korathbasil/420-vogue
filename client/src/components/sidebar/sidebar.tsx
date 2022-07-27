import { FC, useEffect } from "react";
import Link from "next/link";

import styles from "./sidebar.module.scss";
import { Close, Heart, Order, Avatar, Help, Info } from "assets/icons";

interface SidebarProps {
  isSidebarOpen: boolean;
  sidebarToggleHandler: () => void;
}

export const Sidebar: FC<SidebarProps> = ({
  isSidebarOpen,
  sidebarToggleHandler,
}) => {
  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    if (isSidebarOpen && sidebar) sidebar.style.left = "0";
    else if (sidebar) sidebar.style.left = "-100%";
    else return;
  }, [isSidebarOpen]);
  return (
    <aside id="sidebar" className={styles.sidebar}>
      <div className={styles.header}>
        <h1>420VOGUE</h1>
        <div
          onClick={() => sidebarToggleHandler()}
          className={styles.iconWrapper}
        >
          <Close />
        </div>
      </div>
      <nav>
        <ul>
          <Link href={"/wishlist"}>
            <a className={styles.link}>
              <div className={styles.iconWrapper}>
                <Heart />
              </div>
              <p>MY WISHLIST</p>
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
              <p>Account</p>
            </a>
          </Link>
        </ul>
        <div className={styles.spacer}></div>
        <hr />
        <div className={styles.spacer}></div>
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
      </nav>
    </aside>
  );
};
