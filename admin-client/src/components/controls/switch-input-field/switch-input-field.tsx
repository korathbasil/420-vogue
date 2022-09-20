import { FC } from "react";

import styles from "./switch-input-field.module.scss";

interface SwitchInputFieldProps {
  checked: boolean;
  onClick?: () => void;
}

export const SwitchInputField: FC<SwitchInputFieldProps> = ({
  checked,
  onClick,
}) => {
  // return (
  //   <div>
  //     <label onClick={onClick} className="switch">
  //       <input checked={checked} type="checkbox" />
  //       <span className="slider round"></span>
  //     </label>
  //   </div>
  // );

  return (
    <div onClick={onClick} className={styles.switch}>
      <div
        className={styles.check}
        style={{
          backgroundColor: checked
            ? "var(--col-secondary)"
            : "var(--clr-lightgrey)",
          transform: `translateX(${checked ? "30px" : "0"})`,
        }}
      ></div>
    </div>
  );
};
