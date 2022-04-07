import { FC, useEffect } from "react";

import styles from "./sidebar.module.scss";
import { Close } from "assets/icons";

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
    </aside>
  );
};
