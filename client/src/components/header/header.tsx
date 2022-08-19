import Link from "next/link";

import styles from "./header.module.scss";
import { Menu, ShoppingBag, Search } from "assets/icons";
import { FC } from "react";
import { LogoText } from "components";

interface HeaderProps {
  sidebarToggleHandler: () => void;
}

export const Header: FC<HeaderProps> = ({ sidebarToggleHandler }) => {
  return (
    <header className={styles.headerParent}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.left}>
            <div
              onClick={() => sidebarToggleHandler()}
              className={styles.iconWrapper}
            >
              <Menu />
            </div>
          </div>
          <div className={styles.center}>
            <LogoText fontSize="40px" />
          </div>
          <div className={styles.right}>
            <div className={styles.iconWrapper}>
              <Link href={"/search"}>
                <a>
                  <Search />
                </a>
              </Link>
            </div>
            <div className={styles.iconWrapper}>
              <Link href={"/bag"}>
                <a>
                  <ShoppingBag />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
