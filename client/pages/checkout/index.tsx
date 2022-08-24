import { useState, useCallback, useEffect } from "react";
import { NextPage } from "next";

import styles from "../../styles/checkout.module.scss";
import { CHeader, CheckoutSteps, CheckoutNavigator } from "components";
import { useQuery } from "@tanstack/react-query";
import { UsersController } from "lib/controller";

const CheckoutPage: NextPage = () => {
  const { data: user } = useQuery(["user"], UsersController.getCurrentUser, {
    cacheTime: 1000 * 50 * 60 * 24,
  });

  const [minStep, setMinStep] = useState(1);
  const [step, setStep] = useState(0);
  const updateStep = useCallback(setStep, []);

  useEffect(() => {
    console.log(user);
    if (user) setStep(2);
    setMinStep(2);
  }, [user]);

  return (
    <main>
      <CHeader />
      <div className="container">
        <div className={styles.checkout}>
          <CheckoutSteps step={step} updateStep={updateStep} />
          <CheckoutNavigator
            step={step}
            updateStep={updateStep}
            minStep={minStep}
          />
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
