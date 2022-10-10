import styles from "./orders.module.scss";
import { MiniProduct } from "components/";
import { useQuery } from "@tanstack/react-query";

export const Orders = () => {
  const { data: orders } = useQuery(["orders"], async () => {
    return;
  });
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
