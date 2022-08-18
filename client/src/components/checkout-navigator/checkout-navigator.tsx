import { Dispatch, SetStateAction, FC } from "react";

import styles from "./checkout-navigator.module.scss";

interface CheckoutSNavigatorProps {
  step: number;
  updateStep: Dispatch<SetStateAction<number>>;
}

export const CheckoutNavigator: FC<CheckoutSNavigatorProps> = ({
  step,
  updateStep,
}) => {
  return (
    <section className={styles.navigator}>
      Navigator
      <button
        onClick={() => {
          if (step > 1) {
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
      </button>
    </section>
  );
};
