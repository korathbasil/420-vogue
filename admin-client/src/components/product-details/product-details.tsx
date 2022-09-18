import { FC } from "react";
import Link from "next/link";
import { Product } from "lib/interfaces";

import styles from "./product-details.module.scss";
import { VariantCard } from "./variant-card";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.top}>
        <table>
          <tr>
            <td className={styles.prop}>Id</td>
            <td>{product._id}</td>
          </tr>
          <tr>
            <td className={styles.prop}>Brand</td>
            <td>{product.brand}</td>
          </tr>
          <tr>
            <td className={styles.prop}>Style</td>
            <td>{product.style}</td>
          </tr>
          <tr>
            <td className={styles.prop}>Category</td>
            <td>{product.category}</td>
          </tr>
          <tr>
            <td className={styles.prop}>Sub Category</td>
            <td>{product.subCategory}</td>
          </tr>
          <tr>
            <td className={styles.prop}>Status</td>
            <td>{product.isActive}</td>
          </tr>
        </table>
      </div>
      <div className={styles.variants}>
        <h4>Variants</h4>
        <div className={styles.actions}>
          <p>No of variants : 0</p>
          <Link href={`/products/${product._id}/variants/add`}>
            <a className="primary-button-link">Add Variant</a>
          </Link>
        </div>
        <div className={styles.items}>
          <VariantCard variant={product.variants[0]} />
        </div>
      </div>
    </div>
  );
};
