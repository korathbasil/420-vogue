import Link from "next/link";

import styles from "./sidebar.module.scss";
import {
  Dashboard,
  Orders,
  Products,
  Coupons,
  Users,
  Managers,
  Profile,
  Settings,
} from "assets/icons";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link href={"/dashboard"}>
              <a className={styles.link}>
                <div className={styles.iconWrapper}>
                  <Dashboard />
                </div>
                <h3>Dashboard</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/orders"}>
              <a className={styles.link}>
                <div className={styles.iconWrapper}>
                  <Orders />
                </div>
                <h3>Orders</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/products"}>
              <a className={styles.link}>
                <div className={styles.iconWrapper}>
                  <Products />
                </div>
                <h3>Products</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/coupons"}>
              <a className={styles.link}>
                <div className={styles.iconWrapper}>
                  <Coupons />
                </div>
                <h3>Coupons</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/users"}>
              <a className={styles.link}>
                <div className={styles.iconWrapper}>
                  <Users />
                </div>
                <h3>Users</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/managers"}>
              <a className={styles.link}>
                <div className={styles.iconWrapper}>
                  <Managers />
                </div>
                <h3>Managers</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/profile"}>
              <a className={styles.link}>
                <div className={styles.iconWrapper}>
                  <Profile />
                </div>
                <h3>Profile</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/settings"}>
              <a className={styles.link}>
                <div className={styles.iconWrapper}>
                  <Settings />
                </div>
                <h3>Settings</h3>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
