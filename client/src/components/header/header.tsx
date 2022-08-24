import { Dispatch, FC, SetStateAction } from "react";
import Link from "next/link";

import styles from "./header.module.scss";
import { Menu, ShoppingBag, Search, Avatar } from "assets/icons";
import { LogoText } from "components";
import { UsersController } from "lib/controller";
import { useQuery } from "@tanstack/react-query";

interface HeaderProps {
  sidebarToggleHandler: () => void;
  loginModalToggleHandler: Dispatch<SetStateAction<boolean>>;
}

export const Header: FC<HeaderProps> = ({
  sidebarToggleHandler,
  loginModalToggleHandler,
}) => {
  const { isError, data: user } = useQuery(
    ["user"],
    UsersController.getCurrentUser,
    {
      cacheTime: 1000 * 50 * 60 * 24,
    }
  );

  return (
    <header className={styles.headerParent}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.menuWrapper}>
              <Menu onClickAction={sidebarToggleHandler} />
            </div>
            <LogoText fontSize="38px" />
          </div>
          <div className={styles.center}>
            <form>
              <input type="text" placeholder="Shoes, watches..." />
              <div>
                <Search fill="var(--clr-white)" size="25px" />
              </div>
            </form>
          </div>
          <div className={styles.right}>
            <div className={styles.searchWrapper}>
              <Link href={"/search"}>
                <Search />
              </Link>
            </div>

            {user && (
              <div className={styles.profile}>
                <Avatar size="25px" fill="var(--clr-white)" />
                <p>
                  {user?.firstname} {user?.lastname}
                </p>
              </div>
            )}
            {!user && (
              <div
                className={styles.login}
                onClick={() => loginModalToggleHandler(true)}
              >
                <p>LOGIN / SIGNUP</p>
              </div>
            )}
            <div className={styles.iconWrapper}>
              <Link href={"/bag"}>
                <ShoppingBag />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
