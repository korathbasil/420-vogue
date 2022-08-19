import { ReactNode } from "react";
import ReactDOM from "react-dom";

import styles from "./modal.module.scss";

export const Modal = ({ children }: { children: ReactNode }) => {
  return ReactDOM.createPortal(
    <div className={styles.overlay}>{children}</div>,
    document.getElementById("modal-portal") as HTMLDivElement
  );
};
