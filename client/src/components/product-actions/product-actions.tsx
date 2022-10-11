import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./product-actions.module.scss";
import { ShoppingBag, Bolt } from "assets/icons";
import { BagProduct, Product, ProductVariant } from "lib/interfaces";
import { useTempBagProductStore, useUserStore, useVBagStore } from "store";

interface ProductActionsProps {
  product: Product;
  variant: ProductVariant;
  size: string | null;
}

export const ProductActions: FC<ProductActionsProps> = ({
  product,
  variant,
  size,
}) => {
  const router = useRouter();
  const { id: productId } = router.query;

  const user = useUserStore((state) => state.user);
  const vBag = useVBagStore((vb) => vb.vBag);
  const setVBag = useVBagStore((vb) => vb.setVBag);

  const setTempBagPeoduct = useTempBagProductStore((st) => st.setProduct);

  function addToBag() {
    const bagProduct = {
      _id: product._id,
      brand: product.brand,
      style: product.style,
      category: product.category,
      subCategory: product.subCategory,
      quantity: 1,
      variant: {
        _id: variant._id,
        color: variant.color,
        colorCode: variant.colorCode,
        images: variant.images,
        price: variant.price,
        size: size,
      },
    } as BagProduct;

    if (user) {
    } else {
      // handle case for guest user
      setVBag([...vBag, bagProduct]);
    }
  }
  return (
    <div className={styles.actions}>
      <div onClick={addToBag} className={styles.bag}>
        <ShoppingBag size="22px" />
        <h3>ADD TO BAG</h3>
      </div>

      <div
        onClick={() => {
          const bagProduct = {
            _id: product._id,
            brand: product.brand,
            style: product.style,
            category: product.category,
            subCategory: product.subCategory,
            quantity: 1,
            variant: {
              _id: variant._id,
              color: variant.color,
              colorCode: variant.colorCode,
              images: variant.images,
              price: variant.price,
              size: size,
            },
          } as BagProduct;

          setTempBagPeoduct(bagProduct);
          router.push(`/checkout/${productId}`);
        }}
        className={styles.cart}
      >
        <Bolt fill="white" size="22px" />
        <h3>BUY NOW</h3>
      </div>
    </div>
  );
};
