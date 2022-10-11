import { useRouter } from "next/router";
import { useTempBagProductStore } from "store";

import styles from "./checkout-steps.module.scss";
import { MiniProduct } from "components/mini-product/mini-product";
import { useEffect, useState } from "react";

export const CheckoutSummary = () => {
  const product = useTempBagProductStore((store) => store.product);
  const [straightCheckout, setStraightCheckout] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const id = router.query.id;
    if (id) {
    } else {
      setStraightCheckout(false);
    }
  }, [router.query]);

  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <div>
          <h3>3</h3>
        </div>
        <h3>ORDER SUMMARY</h3>
      </div>
      <div className={styles.body}>
        {straightCheckout && product && (
          <div className={styles.products}>
            <MiniProduct product={product} />
          </div>
        )}
        {!straightCheckout && <div className={styles.products}></div>}
      </div>
    </div>
  );
};
