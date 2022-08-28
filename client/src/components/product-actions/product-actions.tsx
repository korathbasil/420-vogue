import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLocalStorage } from "lib/hooks";

import styles from "./product-actions.module.scss";
import { ShoppingBag, Bolt } from "assets/icons";
import { Product, ProductVariant } from "lib/interfaces";
import { useUserStore } from "store";

interface ProductActionsProps {
  product: Product;
  variant: ProductVariant;
}

export const ProductActions: FC<ProductActionsProps> = ({
  product,
  variant,
}) => {
  const router = useRouter();
  const { id: productId } = router.query;

  const user = useUserStore((state) => state.user);
  function addToBag(product: Product) {
    if (user) {
    } else {
      // handle case for guest user
    }
  }
  return (
    <div className={styles.actions}>
      <div className={styles.bag}>
        <ShoppingBag size="22px" />
        <h3>ADD TO BAG</h3>
      </div>
      <Link href={`/checkout/${productId}`}>
        <div className={styles.cart}>
          <Bolt fill="white" size="22px" />
          <h3>BUY NOW</h3>
        </div>
      </Link>
    </div>
  );
};
