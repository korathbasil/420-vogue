import { FC, useState } from "react";
import { BagProduct } from "lib/interfaces";

import styles from "./mini-product.module.scss";
import { AddBox, MinusBox } from "assets/icons";

interface MiniProductProps {
  product: BagProduct;
}

export const MiniProduct: FC<MiniProductProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  function increaseQty() {
    setQuantity((qty) => qty + 1);
  }

  function decreaseQty() {
    if (quantity > 1) {
      setQuantity((qty) => qty - 1);
    }
  }
  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <img src={product.variant.images[0]} alt={product.style} />

        <div className={styles.data}>
          <p>{product.brand}</p>
          <h4>{product.style}</h4>
          <h3>₹{product.variant.price}</h3>
          <p>
            {product.variant.color}, {product.variant.size}
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.actions}>
          <div onClick={decreaseQty} className={styles.minus}>
            <MinusBox size="25px" />
          </div>
          <div className={styles.qty}>
            <p>{product.quantity}</p>
          </div>
          <div onClick={increaseQty} className={styles.add}>
            <AddBox size="25px" />
          </div>
        </div>
        <p>Quantity</p>
      </div>
    </div>
  );
};
