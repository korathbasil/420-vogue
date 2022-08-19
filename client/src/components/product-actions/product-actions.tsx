import styles from "./product-actions.module.scss";

export const ProductActions = () => {
  return (
    <div className={styles.actions}>
      <div className={styles.bag}>ADD TO BAG</div>
      <div className={styles.cart}>BUY NOW</div>
    </div>
  );
};
