import { FC } from "react";

import { Product } from "types";

import styles from "./productDetails.module.scss";

interface ProductDetailsProps {
  product: Product | null;
}

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.top}>
        <h2>{product?.styleName}</h2>
        <h2>₹1300</h2>
      </div>

      <div className={styles.colors}>
        <p>Choose colors</p>
        <div>
          <div className={styles.colorBox}>
            <div style={{ backgroundColor: "#36369c" }}></div>
            <p>Blue</p>
          </div>
          <div className={styles.colorBox}>
            <div style={{ backgroundColor: "#bb6363" }}></div>
            <p>Red</p>
          </div>
          <div className={styles.colorBox}>
            <div style={{ backgroundColor: "#afaf43" }}></div>
            <p>Yellow</p>
          </div>
          <div className={styles.colorBox}>
            <div style={{ backgroundColor: "#b95f16" }}></div>
            <p>Orange</p>
          </div>
          <div className={styles.colorBox}>
            <div style={{ backgroundColor: "#2e6e2e" }}></div>
            <p>Green</p>
          </div>
        </div>
      </div>
    </div>
  );
};
