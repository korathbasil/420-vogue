import { Dispatch, SetStateAction, FC } from "react";

import styles from "./checkout-navigator.module.scss";

interface CheckoutSNavigatorProps {
  step: number;
  minStep: number;
  updateStep: Dispatch<SetStateAction<number>>;
  nextButtonText: string;
  nextButtonAction: () => void;
}

export const CheckoutNavigator: FC<CheckoutSNavigatorProps> = ({
  step,
  minStep,
  updateStep,
  nextButtonText,
  nextButtonAction,
}) => {
  function getBackgroundColor(value: number, step: number) {
    if (step > value) return "var(--clr-primary)";
    return "var(--clr-lightgrey-bg)";
  }
  function getColor(value: number, step: number) {
    if (step > value) return "var(--clr-white)";
    if (step === value) return "var(--clr-primary)";
    return "var(--clr-lightgrey)";
  }
  return (
    <section className={styles.navigator}>
      <div className={styles.steps}>
        <div
          style={{
            backgroundColor: getBackgroundColor(1, step),
            color: getColor(1, step),
          }}
          className={styles.step}
        >
          <p>LOGIN</p>
        </div>
        <div
          style={{ backgroundColor: getBackgroundColor(1, step) }}
          className={styles.devider}
        ></div>
        <div
          style={{
            backgroundColor: getBackgroundColor(2, step),
            color: getColor(2, step),
          }}
          className={styles.step}
        >
          <p>ADDRESS</p>
        </div>
        <div
          style={{ backgroundColor: getBackgroundColor(2, step) }}
          className={styles.devider}
        ></div>
        <div
          style={{
            backgroundColor: getBackgroundColor(3, step),
            color: getColor(3, step),
          }}
          className={styles.step}
        >
          <p>SUMMARY</p>
        </div>
        <div
          style={{ backgroundColor: getBackgroundColor(3, step) }}
          className={styles.devider}
        ></div>
        <div
          style={{
            backgroundColor: getBackgroundColor(4, step),
            color: getColor(4, step),
          }}
          className={styles.step}
        >
          <p>PAYMENT</p>
        </div>
      </div>
      {/* <div className={styles.actions}>
        <div className={styles.backward}></div>
        <div className={styles.forward}>
          <button onClick={nextButtonAction}>{nextButtonText}</button>
        </div>
      </div> */}
    </section>
  );
};
