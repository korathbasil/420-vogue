import styles from "./checkout-steps.module.scss";

export const CheckoutPayments = () => {
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

        <form>
          <div>
            <input
              type="radio"
              name="paymentMethode"
              value="DEBIT_CARD"
              id="debit-card"
            />
            <label htmlFor="debit-card">DEBIT CARD</label>
          </div>
          <div>
            <input
              type="radio"
              name="paymentMethode"
              value="CREDIT_CARD"
              id="credit-card"
            />
            <label htmlFor="credit-card">CREDIT CARD</label>
          </div>
          <div>
            <input type="radio" name="paymentMethode" value="UPI" id="upi" />
            <label htmlFor="upi">UPI</label>
          </div>
          <div>
            <input
              type="radio"
              name="paymentMethode"
              value="CASH_ON_DELIVERY"
              id="cash-on-delivery"
            />
            <label htmlFor="cash-on-delivery">Cash on Delivery</label>
          </div>
        </form>
      </div>
    </div>
  );
};
