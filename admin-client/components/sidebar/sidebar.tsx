import { useState } from "react";
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

enum ActiveLinks {
  Dashboard = "dashboard",
  Orders = "orders",
  Products = "products",
  Coupons = "coupons",
  Users = "users",
  Managers = "managers",
  Profile = "profile",
  Settings = "settings",
}

export const Sidebar = () => {
  const [activeLink, setActiveLink] = useState<ActiveLinks>(
    ActiveLinks.Dashboard
  );
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>
              <a
                className={styles.link}
                onClick={() => setActiveLink(ActiveLinks.Dashboard)}
                style={{
                  color:
                    activeLink === ActiveLinks.Dashboard ? "white" : "#7367f0",
                  backgroundColor:
                    activeLink === ActiveLinks.Dashboard ? "#7367f0" : "white",
                }}
              >
                <div className={styles.iconWrapper}>
                  <Dashboard
                    color={
                      activeLink === ActiveLinks.Dashboard ? "white" : "#7367f0"
                    }
                  />
                </div>
                <h3>Dashboard</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/orders"}>
              <a
                className={styles.link}
                onClick={() => setActiveLink(ActiveLinks.Orders)}
                style={{
                  color:
                    activeLink === ActiveLinks.Orders ? "white" : "#7367f0",
                  backgroundColor:
                    activeLink === ActiveLinks.Orders ? "#7367f0" : "none",
                }}
              >
                <div className={styles.iconWrapper}>
                  <Orders
                    color={
                      activeLink === ActiveLinks.Orders ? "white" : "#7367f0"
                    }
                  />
                </div>
                <h3>Orders</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/products"}>
              <a
                className={styles.link}
                onClick={() => setActiveLink(ActiveLinks.Products)}
                style={{
                  color:
                    activeLink === ActiveLinks.Products ? "white" : "#7367f0",
                  backgroundColor:
                    activeLink === ActiveLinks.Products ? "#7367f0" : "none",
                }}
              >
                <div className={styles.iconWrapper}>
                  <Products
                    color={
                      activeLink === ActiveLinks.Products ? "white" : "#7367f0"
                    }
                  />
                </div>
                <h3>Products</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/coupons"}>
              <a
                className={styles.link}
                onClick={() => setActiveLink(ActiveLinks.Coupons)}
                style={{
                  color:
                    activeLink === ActiveLinks.Coupons ? "white" : "#7367f0",
                  backgroundColor:
                    activeLink === ActiveLinks.Coupons ? "#7367f0" : "none",
                }}
              >
                <div className={styles.iconWrapper}>
                  <Coupons
                    color={
                      activeLink === ActiveLinks.Coupons ? "white" : "#7367f0"
                    }
                  />
                </div>
                <h3>Coupons</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/users"}>
              <a
                className={styles.link}
                onClick={() => setActiveLink(ActiveLinks.Users)}
                style={{
                  color: activeLink === ActiveLinks.Users ? "white" : "#7367f0",
                  backgroundColor:
                    activeLink === ActiveLinks.Users ? "#7367f0" : "none",
                }}
              >
                <div className={styles.iconWrapper}>
                  <Users
                    color={
                      activeLink === ActiveLinks.Users ? "white" : "#7367f0"
                    }
                  />
                </div>
                <h3>Users</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/managers"}>
              <a
                className={styles.link}
                onClick={() => setActiveLink(ActiveLinks.Managers)}
                style={{
                  color:
                    activeLink === ActiveLinks.Managers ? "white" : "#7367f0",
                  backgroundColor:
                    activeLink === ActiveLinks.Managers ? "#7367f0" : "none",
                }}
              >
                <div className={styles.iconWrapper}>
                  <Managers
                    color={
                      activeLink === ActiveLinks.Managers ? "white" : "#7367f0"
                    }
                  />
                </div>
                <h3>Managers</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/profile"}>
              <a
                className={styles.link}
                onClick={() => setActiveLink(ActiveLinks.Profile)}
                style={{
                  color:
                    activeLink === ActiveLinks.Profile ? "white" : "#7367f0",
                  backgroundColor:
                    activeLink === ActiveLinks.Profile ? "#7367f0" : "none",
                }}
              >
                <div className={styles.iconWrapper}>
                  <Profile
                    color={
                      activeLink === ActiveLinks.Profile ? "white" : "#7367f0"
                    }
                  />
                </div>
                <h3>Profile</h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/settings"}>
              <a
                className={styles.link}
                onClick={() => setActiveLink(ActiveLinks.Settings)}
                style={{
                  color:
                    activeLink === ActiveLinks.Settings ? "white" : "#7367f0",
                  backgroundColor:
                    activeLink === ActiveLinks.Settings ? "#7367f0" : "none",
                }}
              >
                <div className={styles.iconWrapper}>
                  <Settings
                    color={
                      activeLink === ActiveLinks.Settings ? "white" : "#7367f0"
                    }
                  />
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
