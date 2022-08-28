import { MiniProduct } from "components/mini-product/mini-product";
import styles from "./checkout-steps.module.scss";

export const CheckoutSummary = () => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <div>
          <h3>3</h3>
        </div>
        <h3>ORDER SUMMARY</h3>
      </div>
      <div className={styles.body}>
        <div className={styles.products}>
          <MiniProduct />
        </div>
      </div>
    </div>
  );
};
