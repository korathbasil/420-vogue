import { NextPage } from "next";

import styles from "../../styles/bag.module.scss";
import { CHeader } from "components";
import { FC } from "react";

const BagPage: NextPage = () => {
  return (
    <main>
      <CHeader />
      <div className="container">
        <div className={styles.bag}>
          <div className={styles.items}>
            <h3>Items in your bag</h3>
            <div className={styles.products}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
          <div className={styles.summary}></div>
        </div>
      </div>
    </main>
  );
};

interface ProductProps {
  _id: string;
  brandname: string;
  stylename: string;
  price: number;
}

const Product: FC<ProductProps> = () => {
  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <img
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />

        <div>
          <p>Nike</p>
          <h4>Air Jordan</h4>
          <h3>₹7899</h3>
          <p>Yellow Cream, 44EU</p>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default BagPage;
