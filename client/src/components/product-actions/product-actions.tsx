import Link from "next/link";

import styles from "./product-actions.module.scss";
import { ShoppingBag, Bolt } from "assets/icons";

export const ProductActions = () => {
  return (
    <div className={styles.actions}>
      <div className={styles.bag}>
        <ShoppingBag size="22px" />
        <h3>ADD TO BAG</h3>
      </div>
      <Link href="/checkout">
        <div className={styles.cart}>
          <Bolt fill="white" size="22px" />
          <h3>BUY NOW</h3>
        </div>
      </Link>
    </div>
  );
};
