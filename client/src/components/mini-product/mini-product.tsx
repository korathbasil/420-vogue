import { AddBox, MinusBox } from "assets/icons";
import { FC, useState } from "react";

import styles from "./mini-product.module.scss";

interface MiniProductProps {
  _id: string;
  brandname: string;
  stylename: string;
  price: number;
}

export const MiniProduct: FC = () => {
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
        <img
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />

        <div className={styles.data}>
          <p>Nike</p>
          <h4>Air Jordan</h4>
          <h3>₹7899</h3>
          <p>Yellow Cream, 44EU</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.actions}>
          <div onClick={decreaseQty} className={styles.minus}>
            <MinusBox size="25px" />
          </div>
          <div className={styles.qty}>
            <p>{quantity}</p>
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
