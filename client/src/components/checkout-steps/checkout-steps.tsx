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
      {step === 1 && <CheckoutLogin updateStep={updateStep} />}
      {step === 2 && <CheckoutAddress updateStep={updateStep} />}
      {step === 3 && <CheckoutSummary />}
      {step === 4 && <CheckoutPayments />}
    </section>
  );
};
