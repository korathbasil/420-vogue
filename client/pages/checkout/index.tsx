import { useState, useCallback } from "react";
import { NextPage } from "next";

import styles from "../../styles/checkout.module.scss";
import { CHeader, CheckoutSteps, CheckoutNavigator } from "components";

const CheckoutPage: NextPage = () => {
  const [step, setStep] = useState(1);

  const updateStep = useCallback(setStep, []);

  return (
    <main>
      <CHeader />
      <div className="container">
        <div className={styles.checkout}>
          <CheckoutSteps step={step} updateStep={updateStep} />
          <CheckoutNavigator />
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
