import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
  Dashboard = "",
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

  const router = useRouter();

  useEffect(() => {
    const baseRoute = router.pathname.split("/")[1];
    setActiveLink(baseRoute as ActiveLinks);
  }, [router.pathname]);

  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>
              <a
                className={
                  activeLink == ActiveLinks.Dashboard
                    ? styles.link__active
                    : styles.link
                }
              >
                <div className={styles.iconWrapper}>
                  <Dashboard
                    color={
                      activeLink === ActiveLinks.Dashboard
                        ? "white"
                        : "var(--col-grey-text)"
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
                className={
                  activeLink == ActiveLinks.Orders
                    ? styles.link__active
                    : styles.link
                }
              >
                <div className={styles.iconWrapper}>
                  <Orders
                    color={
                      activeLink === ActiveLinks.Orders
                        ? "white"
                        : "var(--col-grey-text)"
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
                className={
                  activeLink == ActiveLinks.Products
                    ? styles.link__active
                    : styles.link
                }
              >
                <div className={styles.iconWrapper}>
                  <Products
                    color={
                      activeLink === ActiveLinks.Products
                        ? "white"
                        : "var(--col-grey-text)"
                    }
                  />
                </div>
                <h3>Products</h3>
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href={"/coupons"}>
              <a
                className={
                  activeLink == ActiveLinks.Coupons
                    ? styles.link__active
                    : styles.link
                }
              >
                <div className={styles.iconWrapper}>
                  <Coupons
                    color={
                      activeLink === ActiveLinks.Coupons
                        ? "white"
                        : "var(--col-grey-text)"
                    }
                  />
                </div>
                <h3>Coupons</h3>
              </a>
            </Link>
          </li> */}
          {/* <li>
            <Link href={"/users"}>
              <a
                className={
                  activeLink == ActiveLinks.Users
                    ? styles.link__active
                    : styles.link
                }
              >
                <div className={styles.iconWrapper}>
                  <Users
                    color={
                      activeLink === ActiveLinks.Users
                        ? "white"
                        : "var(--col-grey-text)"
                    }
                  />
                </div>
                <h3>Users</h3>
              </a>
            </Link>
          </li> */}
          <li>
            <Link href={"/managers"}>
              <a
                className={
                  activeLink == ActiveLinks.Managers
                    ? styles.link__active
                    : styles.link
                }
              >
                <div className={styles.iconWrapper}>
                  <Managers
                    color={
                      activeLink === ActiveLinks.Managers
                        ? "white"
                        : "var(--col-grey-text)"
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
                className={
                  activeLink == ActiveLinks.Profile
                    ? styles.link__active
                    : styles.link
                }
              >
                <div className={styles.iconWrapper}>
                  <Profile
                    color={
                      activeLink === ActiveLinks.Profile
                        ? "white"
                        : "var(--col-grey-text)"
                    }
                  />
                </div>
                <h3>Profile</h3>
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href={"/settings"}>
              <a
                className={
                  activeLink == ActiveLinks.Settings
                    ? styles.link__active
                    : styles.link
                }
              >
                <div className={styles.iconWrapper}>
                  <Settings
                    color={
                      activeLink === ActiveLinks.Settings
                        ? "white"
                        : "var(--col-grey-text)"
                    }
                  />
                </div>
                <h3>Settings</h3>
              </a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </aside>
  );
};
