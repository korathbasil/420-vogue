import { FC } from "react";
import Link from "next/link";
import { ProductVariant } from "lib/interfaces";

import styles from "./product-details.module.scss";

interface VariantCardProps {
  variant: ProductVariant;
}

export const VariantCard: FC<VariantCardProps> = ({ variant }) => {
  return (
    <div className={styles.variantCard}>
      <div>
        <table>
          <tr>
            <td>Color</td>
            <td>{variant.color}</td>
          </tr>
          <tr>
            <td>Color Code</td>
            <td>{variant.colorCode}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{variant.price}</td>
          </tr>
        </table>
        <div className={styles.actions}>
          <Link href="/products/123/variants/123/edit">
            <a className="primary-button">Edit</a>
          </Link>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className={styles.compoundInput}>
        <div>
          <InputField label="Color" name="color" />
        </div>
        <div>
          <InputField label="Color Code" name="colorCode" />
        </div>
      </div>
      <div className={styles.compoundInput}>
        <div>
          <InputField label="Price" name="price" />
        </div>
        <div className={styles.actions}>
          <button>Add more variants</button>
        </div>
      </div> */
}
