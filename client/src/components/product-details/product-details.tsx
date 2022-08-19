import { FC } from "react";

import { Product } from "types";

import styles from "./product-details.module.scss";

interface ProductDetailsProps {
  product: Product | null;
}

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.top}>
        <h3>Nike</h3>
        <h4>₹1300</h4>
        <h2>Jordan Air</h2>
        <p>SHOES, CASUAL SHOES</p>
      </div>
      <div className={styles.description}>
        <h5>DESCRIPTION</h5>
        <ul>
          <li>Lightweight</li>
          <li>Comfy</li>
          <li>Water proof and very good</li>
          <li>Lightweight</li>
        </ul>
      </div>

      {/* <div className={styles.colors}>
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
      </div> */}
    </div>
  );
};
