import { Dispatch, SetStateAction, FC } from "react";

import styles from "./checkout-navigator.module.scss";

interface CheckoutSNavigatorProps {
  step: number;
  minStep: number;
  updateStep: Dispatch<SetStateAction<number>>;
}

export const CheckoutNavigator: FC<CheckoutSNavigatorProps> = ({
  step,
  minStep,
  updateStep,
}) => {
  return (
    <section className={styles.navigator}>
      <div className={styles.steps}>
        <div className={styles.step}>
          <p>LOGIN</p>
        </div>
        <div className={styles.devider}></div>
        <div className={styles.step}>
          <p>ADDRESS</p>
        </div>
        <div className={styles.devider}></div>
        <div className={styles.step}>
          <p>SUMMARY</p>
        </div>
        <div className={styles.devider}></div>
        <div className={styles.step}>
          <p>PAYMENT</p>
        </div>
      </div>
      {/* Navigator
      <button
        onClick={() => {
          if (step > minStep) {
            updateStep((step) => step - 1);
          }
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (step < 4) {
            updateStep((step) => step + 1);
          }
        }}
      >
        Next
      </button> */}
    </section>
  );
};
