import styles from "./orders.module.scss";
import { MiniProduct } from "components/";

export const Orders = () => {
  return (
    <div className={styles.orders}>
      <h3>My orders</h3>
      <div className={styles.products}>
        <MiniProduct />
        <MiniProduct />
        <MiniProduct />
      </div>
    </div>
  );
};
