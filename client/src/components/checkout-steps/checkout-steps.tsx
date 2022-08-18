import { Dispatch, SetStateAction, FC } from "react";

import styles from "./checkout-steps.module.scss";
import { CheckoutLogin } from "./checkout-login";
import { CheckoutAddress } from "./checkout-address";
import { CheckoutSummary } from "./checkout-summary";
import { CheckoutPayments } from "./checkout-payments";

interface CheckoutStepsProps {
  step: number;
  updateStep: Dispatch<SetStateAction<number>>;
}

export const CheckoutSteps: FC<CheckoutStepsProps> = ({ step, updateStep }) => {
  return (
    <section className={styles.steps}>
      {step === 1 && <CheckoutLogin />}
      {step === 2 && <CheckoutAddress />}
      {step === 3 && <CheckoutSummary />}
      {step === 4 && <CheckoutPayments />}

      <button
        onClick={() => {
          if (step > 0) {
            updateStep((step) => step - 1);
          }
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (step < 5) {
            updateStep((step) => step + 1);
          }
        }}
      >
        Next
      </button>
    </section>
  );
};
