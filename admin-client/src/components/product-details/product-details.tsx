import { FC } from "react";
import Link from "next/link";
import { Product } from "lib/interfaces";
import { categories } from "sys";
import { findCategoryFromValue, findSubCategoryFromValue } from "utils";

import styles from "./product-details.module.scss";
import { VariantCard } from "./variant-card";
import { SwitchInputField } from "components/controls";
import { array, TypeOf } from "yup";

interface ProductDetailsProps {
  product: Product;
  enabled: boolean;
  setEnabled: () => void;
}

export const ProductDetails: FC<ProductDetailsProps> = ({
  product,
  enabled,
  setEnabled,
}) => {
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
            <td>{findCategoryFromValue(product.category)?.value}</td>
          </tr>
          <tr>
            <td className={styles.prop}>Sub Category</td>
            <td>
              {
                findSubCategoryFromValue(product.category, product.subCategory)
                  ?.value
              }
            </td>
          </tr>
          <tr>
            <td className={styles.prop}>Status</td>
            <td>{product.isActive}</td>
            <td>
              <SwitchInputField checked={enabled} onClick={setEnabled} />
            </td>
          </tr>
        </table>
        <div className={styles.actions}>
          <Link href={`/products/${product._id}/edit`}>
            <a className="primary-button-link">Edit</a>
          </Link>
          <button>Delete</button>
        </div>
      </div>
      <div className={styles.variants}>
        <h4>Variants</h4>
        <div className={styles.actions}>
          <p>No of variants : {product.variants.length}</p>
          <Link href={`/products/${product._id}/variants/add`}>
            <a className="primary-button">Add Variant</a>
          </Link>
        </div>
        <div className={styles.items}>
          {product.variants.map((v) => (
            <VariantCard key={v._id} variant={v} />
          ))}
        </div>
      </div>
    </div>
  );
};
