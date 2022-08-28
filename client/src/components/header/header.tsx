import { Dispatch, FC, SetStateAction, useState } from "react";
import Link from "next/link";

import styles from "./header.module.scss";
import { Menu, ShoppingBag, Search, Avatar, Help } from "assets/icons";
import { LogoText } from "components";
import { HelpMenu } from "./help-menu";
import { useUserStore } from "store";
import { UserMenu } from "./user-menu";

interface HeaderProps {
  sidebarToggleHandler: () => void;
  loginModalToggleHandler: Dispatch<SetStateAction<boolean>>;
}

export const Header: FC<HeaderProps> = ({
  sidebarToggleHandler,
  loginModalToggleHandler,
}) => {
  const user = useUserStore((state) => state.user);

  const [openedMenu, setOpenedMenu] = useState("");
  function handleMenu(menuName: string) {
    if (openedMenu === menuName) return setOpenedMenu("");
    setOpenedMenu(menuName);
  }

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
              <div
                onClick={() => handleMenu("user")}
                className={styles.profile}
              >
                <Avatar size="25px" fill="var(--clr-white)" />
                <p className={styles.name}>
                  {user?.firstname} {user?.lastname}
                </p>
                {openedMenu === "user" && <UserMenu />}
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

            <Link href="/bag">
              <a>
                <ShoppingBag />
              </a>
            </Link>

            <div onClick={() => handleMenu("help")} className={styles.help}>
              <Help />
              {openedMenu === "help" && <HelpMenu />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
