import { FC } from "react";
import { Product, ProductVariant } from "lib/interfaces";
import { serializeCategory } from "utils";

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
          {serializeCategory(product.category)},{" "}
          {serializeCategory(product.subCategory)}
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
    </div>
  );
};
