import { PaymentsController } from "lib/controller";
import { resolve } from "path";

import styles from "./checkout-steps.module.scss";

export const CheckoutPayments = () => {
  function loadScript() {
    return new Promise<void>((resolve, reject) => {
      const scriptTag = document.createElement("script");
      scriptTag.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(scriptTag);

      scriptTag.onload = () => resolve();
      scriptTag.onerror = () => reject();
    });
  }

  async function makePayment() {
    await loadScript();

    const order = await PaymentsController.createOrder();

    // @ts-ignore
    const Razorpay = window.Razorpay;

    PaymentsController.makePayment(Razorpay, order);
  }

  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <div>
          <h3>4</h3>
        </div>
        <h3>PAYMENT METHODE</h3>
      </div>
      <div className={styles.body}>
        <p>Please select a payment methode</p>

        <form className={styles.form}>
          <label htmlFor="razorpay">
            <input
              type="radio"
              name="paymentMethode"
              value="RAZORPAY"
              id="razorpay"
            />
            <p>Razorpay (DEBIT CARD, CREDIT CARD, UPI)</p>
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethode"
              value="CASH_ON_DELIVERY"
              id="cash-on-delivery"
              disabled
              className={styles.disabledLabel}
            />
            <p>Cash on Delivery</p>
          </label>
        </form>
        <div className={styles.actions}>
          <button className={styles.payButton} onClick={makePayment}>
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};
