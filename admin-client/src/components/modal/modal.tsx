import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

import styles from "./modal.module.scss";

interface ModalProps {
  children: ReactNode;
  clickHandler?: () => void;
}

export const Modal: FC<ModalProps> = ({ children, clickHandler }) => {
  return ReactDOM.createPortal(
    <div onClick={clickHandler} className={styles.overlay}>
      {children}
    </div>,
    document.getElementById("modal-portal") as HTMLDivElement
  );
};
