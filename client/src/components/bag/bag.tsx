import { AddBox, MinusBox } from "assets/icons";
import { FC } from "react";

import styles from "./bag.module.scss";

export const Bag = () => {
  return (
    <div className={styles.bag}>
      <div className={styles.items}>
        <h3>Items in your bag</h3>
        <div className={styles.products}>
          <Product />
          <Product />
        </div>
      </div>
      <div className={styles.summary}></div>
    </div>
  );
};

interface ProductProps {
  _id: string;
  brandname: string;
  stylename: string;
  price: number;
}

const Product: FC = () => {
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
          <div className={styles.minus}>
            <MinusBox size="25px" />
          </div>
          <div className={styles.qty}>
            <p>12</p>
          </div>
          <div className={styles.add}>
            <AddBox size="25px" />
          </div>
        </div>
        <p>Quantity</p>
      </div>
    </div>
  );
};
