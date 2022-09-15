import { FC } from "react";
import { Product, ProductVariant } from "lib/interfaces";

import styles from "./product-details.module.scss";

interface ProductDetailsProps {
  product: Product;
  variant: ProductVariant;
}

export const ProductDetails: FC<ProductDetailsProps> = ({
  product,
  variant,
}) => {
  return (
    <div className={styles.parent} onClick={(e) => e.stopPropagation()}>
      <div className={styles.top}>
        <h3>{product.brand}</h3>
        <h4>{variant.price}</h4>
        <h2>{product.style}</h2>
        <p>
          {product.category}, {product.subCategory}
        </p>
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
