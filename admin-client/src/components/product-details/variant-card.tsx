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
      <table>
        <tr>
          <td className={styles.prop}>Color</td>
          <td>{variant.color}</td>
        </tr>
        <tr>
          <td className={styles.prop}>Color Code</td>
          <td>#{variant.colorCode}</td>
        </tr>
        <tr>
          <td className={styles.prop}>Price</td>
          <td>{variant.price}</td>
        </tr>
      </table>
      <div className={styles.images}>
        {variant.images.map((img) => (
          <img key={img} src={img} alt="" />
        ))}
      </div>
      <div className={styles.controls}>
        <Link href="/products/123/variants/123/edit">
          <a className="primary-button-link">Edit</a>
        </Link>
        <button>Delete</button>
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
