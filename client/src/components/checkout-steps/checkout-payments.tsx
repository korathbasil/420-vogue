import { PaymentsController } from "lib/controller";

import styles from "./checkout-steps.module.scss";

export const CheckoutPayments = () => {
  async function makePayment() {
    const order = await PaymentsController.makePayment();
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
