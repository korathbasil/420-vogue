import { Dispatch, SetStateAction, FC } from "react";

import styles from "./checkout-steps.module.scss";
import { LoginModal } from "components";

interface CheckoutLoginProps {
  updateStep: Dispatch<SetStateAction<number>>;
}

export const CheckoutLogin: FC<CheckoutLoginProps> = ({ updateStep }) => {
  function GoToCheckoutAddress() {
    updateStep(2);
  }
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <div>
          <h3>1</h3>
        </div>
        <h3>LOGIN / SIGNUP</h3>
      </div>
      <div className={styles.body}>
        <LoginModal closeModal={GoToCheckoutAddress} minimal={true} />
      </div>
    </div>
  );
};
